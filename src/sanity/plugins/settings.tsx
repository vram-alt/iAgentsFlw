/**
 * This plugin contains all the logic for setting up the singletons
 */

import { type DocumentDefinition } from 'sanity'
import { type StructureResolver, type ListItemBuilder } from 'sanity/structure'

interface TemplateItem {
  templateId: string
  [key: string]: unknown
}

interface DocumentAction {
  action: string
  [key: string]: unknown
}

interface NewDocumentOptionsContext {
  creationContext?: {
    type?: string
    [key: string]: unknown
  }
  [key: string]: unknown
}

interface DocumentActionsContext {
  schemaType?: string
  [key: string]: unknown
}

export const singletonPlugin = (types: string[]) => {
  return {
    name: 'singletonPlugin',
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev: TemplateItem[], context: NewDocumentOptionsContext) => {
        const { creationContext } = context;
        if (creationContext?.type === 'global') {
          return prev.filter(
            (templateItem: TemplateItem) => !types.includes(templateItem.templateId),
          )
        }

        return prev
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev: DocumentAction[], context: DocumentActionsContext) => {
        const { schemaType } = context;
        if (schemaType && types.includes(schemaType)) {
          return prev.filter((item: DocumentAction) => item.action !== 'duplicate')
        }

        return prev
      },
    },
  }
}

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[] = []
): StructureResolver => {
  return (S) => {
    const singletonItems = typeDefArray.map((typeDef) =>
      S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name),
        )
    )
    const singletonWithDividers: (ListItemBuilder | ReturnType<typeof S.divider>)[] = []
    singletonItems.forEach((item, idx) => {
      singletonWithDividers.push(item)
      if (idx < singletonItems.length - 1) {
        singletonWithDividers.push(S.divider())
      }
    })

    const items: (ListItemBuilder | ReturnType<typeof S.divider>)[] = []
    
    // Add singleton items if any exist
    if (singletonWithDividers.length > 0) {
      items.push(...singletonWithDividers)
      items.push(S.divider())
    }
    
    // Add document type list items
    items.push(S.documentTypeListItem('post').title('Blog Posts'))
    items.push(S.divider())
    items.push(S.documentTypeListItem('blogCategory').title('Blog Categories'))
    items.push(S.divider())
    items.push(S.documentTypeListItem('author').title('Blog Authors'))

    return S.list()
      .title('Content')
      .items(items)
  }
}