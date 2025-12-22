import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface Block {
  _type: string
  _key: string
  children?: Array<{
    _key: string
    _type: string
    text: string
    marks?: string[]
  }>
  style?: string
  listItem?: string
  level?: number
  asset?: {
    _ref: string
    _type: string
  }
  alt?: string
}

interface PortableTextProps {
  blocks: Block[]
  className?: string
}

const PortableText: React.FC<PortableTextProps> = ({ blocks, className = '' }) => {
  if (!blocks || !Array.isArray(blocks)) {
    return null
  }

  // Render text children with marks (bold, italic, etc.)
  const renderTextChildren = (children: Block['children']) => {
    if (!children) return null
    
    return children.map((child, index) => {
      let text: React.ReactNode = child.text

      // Handle text marks (bold, italic, etc.)
      if (child.marks && child.marks.length > 0) {
        child.marks.forEach((mark: string) => {
          if (mark === 'strong') {
            text = <strong key={`${child._key}-strong`}>{text}</strong>
          } else if (mark === 'em') {
            text = <em key={`${child._key}-em`}>{text}</em>
          } else if (mark === 'underline') {
            text = <u key={`${child._key}-underline`}>{text}</u>
          } else if (mark === 'code') {
            text = <code key={`${child._key}-code`}>{text}</code>
          }
        })
      }

      return <React.Fragment key={child._key || index}>{text}</React.Fragment>
    })
  }

  // Group consecutive list items together
  const groupListItems = (blocks: Block[]): React.ReactNode[] => {
    const result: React.ReactNode[] = []
    let currentList: Block[] = []
    let currentListType: string | null = null

    blocks.forEach((block, index) => {
      if (block._type === 'block' && block.listItem) {
        // If same list type, add to current list
        if (block.listItem === currentListType) {
          currentList.push(block)
        } else {
          // If different list type, render previous list and start new one
          if (currentList.length > 0) {
            result.push(renderList(currentList, currentListType!))
          }
          currentList = [block]
          currentListType = block.listItem
        }
      } else {
        // Not a list item, render previous list if exists
        if (currentList.length > 0) {
          result.push(renderList(currentList, currentListType!))
          currentList = []
          currentListType = null
        }
        // Render current block
        const rendered = renderBlock(block)
        if (rendered) {
          result.push(rendered)
        }
      }
    })

    // Render any remaining list
    if (currentList.length > 0) {
      result.push(renderList(currentList, currentListType!))
    }

    return result.filter(Boolean)
  }

  // Render a list (ul or ol)
  const renderList = (listItems: Block[], listType: string) => {
    const isOrdered = listType === 'number'
    const ListTag = isOrdered ? 'ol' : 'ul'

    return (
      <ListTag
        key={`list-${listItems[0]._key}`}
        className={`my-4 list-outside ${
          isOrdered ? 'list-decimal' : 'list-disc'
        } space-y-2 text-gray-300`}
        style={{ 
          paddingLeft: '2rem',
          marginLeft: '1rem'
        }}
      >
        {listItems.map((item) => (
          <li
            key={item._key}
            className="leading-relaxed"
            style={{ paddingLeft: '0.5rem' }}
          >
            {renderTextChildren(item.children)}
          </li>
        ))}
      </ListTag>
    )
  }

  const renderBlock = (block: Block): React.ReactNode => {
    const { _type, _key } = block

    if (_type === 'block') {
      // Skip list items here - they're handled in groupListItems
      if (block.listItem) {
        return null
      }

      const style = block.style || 'normal'
      const children = renderTextChildren(block.children)

      const Tag = style === 'h1' ? 'h1' 
        : style === 'h2' ? 'h2' 
        : style === 'h3' ? 'h3' 
        : style === 'h4' ? 'h4' 
        : style === 'blockquote' ? 'blockquote' 
        : 'p'

      return React.createElement(
        Tag,
        {
          key: _key,
          className: getBlockClassName(style),
        },
        children
      )
    }

    if (_type === 'image') {
      const imageUrl = urlFor({ asset: block.asset })

      if (!imageUrl) return null

      return (
        <figure key={_key} className="my-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={block.alt || ''}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          {block.alt && <figcaption className="text-sm text-gray-400 mt-2 text-center">{block.alt}</figcaption>}
        </figure>
      )
    }

    return null
  }

  const getBlockClassName = (style: string) => {
    const baseClass = 'mb-4'
    switch (style) {
      case 'h1':
        return `${baseClass} text-4xl font-bold mt-8 mb-6 text-white`
      case 'h2':
        return `${baseClass} text-3xl font-bold mt-6 mb-4 text-white`
      case 'h3':
        return `${baseClass} text-2xl font-semibold mt-4 mb-3 text-white`
      case 'h4':
        return `${baseClass} text-xl font-semibold mt-3 mb-2 text-white`
      case 'blockquote':
        return `${baseClass} border-l-4 border-[#F47F21] pl-4 italic text-gray-300 my-4`
      default:
        return `${baseClass} text-gray-300 leading-relaxed`
    }
  }

  return <div className={className}>{groupListItems(blocks)}</div>
}

export default PortableText
