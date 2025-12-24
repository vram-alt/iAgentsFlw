'use client'

import { useEffect } from 'react'

export default function StudioStyles() {
  useEffect(() => {
    // Inject style tag to override Sanity Studio heading colors
    const styleId = 'sanity-studio-heading-override'

    // Function to apply styles
    const applyStyles = () => {
      // Remove existing style if any
      const existingStyle = document.getElementById(styleId)
      if (existingStyle) {
        existingStyle.remove()
      }
      
      // Create and inject style tag
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
      /* Force dark heading colors in Sanity Studio - Light Mode Specific */
      [data-sanity] h1,
      [data-sanity] h2,
      [data-sanity] h3,
      [data-sanity] h4,
      [data-sanity] h5,
      [data-sanity] h6 {
        color: #1a1a1a !important;
        -webkit-text-fill-color: #1a1a1a !important;
      }
      
      /* Light mode specific overrides - target body with light background */
      body:not([data-scheme="dark"]) [data-sanity] h1,
      body:not([data-scheme="dark"]) [data-sanity] h2,
      body:not([data-scheme="dark"]) [data-sanity] h3,
      body:not([data-scheme="dark"]) [data-sanity] h4,
      body:not([data-scheme="dark"]) [data-sanity] h5,
      body:not([data-scheme="dark"]) [data-sanity] h6,
      [data-scheme="light"] [data-sanity] h1,
      [data-scheme="light"] [data-sanity] h2,
      [data-scheme="light"] [data-sanity] h3,
      [data-scheme="light"] [data-sanity] h4,
      [data-scheme="light"] [data-sanity] h5,
      [data-scheme="light"] [data-sanity] h6,
      html:not([data-scheme="dark"]) [data-sanity] h1,
      html:not([data-scheme="dark"]) [data-sanity] h2,
      html:not([data-scheme="dark"]) [data-sanity] h3,
      html:not([data-scheme="dark"]) [data-sanity] h4,
      html:not([data-scheme="dark"]) [data-sanity] h5,
      html:not([data-scheme="dark"]) [data-sanity] h6 {
        color: #1a1a1a !important;
        -webkit-text-fill-color: #1a1a1a !important;
      }
      
      /* PortableText editor specific - Light Mode */
      [data-sanity] [data-slate-editor] h1,
      [data-sanity] [data-slate-editor] h2,
      [data-sanity] [data-slate-editor] h3,
      [data-sanity] [data-slate-editor] h4,
      [data-sanity] [data-slate-editor] h5,
      [data-sanity] [data-slate-editor] h6,
      [data-sanity] [contenteditable="true"] h1,
      [data-sanity] [contenteditable="true"] h2,
      [data-sanity] [contenteditable="true"] h3,
      [data-sanity] [contenteditable="true"] h4,
      [data-sanity] [contenteditable="true"] h5,
      [data-sanity] [contenteditable="true"] h6,
      [data-sanity] [contenteditable] h1,
      [data-sanity] [contenteditable] h2,
      [data-sanity] [contenteditable] h3,
      [data-sanity] [contenteditable] h4,
      [data-sanity] [contenteditable] h5,
      [data-sanity] [contenteditable] h6,
      body:not([data-scheme="dark"]) [data-sanity] [data-slate-editor] h1,
      body:not([data-scheme="dark"]) [data-sanity] [data-slate-editor] h2,
      body:not([data-scheme="dark"]) [data-sanity] [data-slate-editor] h3,
      body:not([data-scheme="dark"]) [data-sanity] [data-slate-editor] h4,
      body:not([data-scheme="dark"]) [data-sanity] [data-slate-editor] h5,
      body:not([data-scheme="dark"]) [data-sanity] [data-slate-editor] h6,
      [data-scheme="light"] [data-sanity] [data-slate-editor] h1,
      [data-scheme="light"] [data-sanity] [data-slate-editor] h2,
      [data-scheme="light"] [data-sanity] [data-slate-editor] h3,
      [data-scheme="light"] [data-sanity] [data-slate-editor] h4,
      [data-scheme="light"] [data-sanity] [data-slate-editor] h5,
      [data-scheme="light"] [data-sanity] [data-slate-editor] h6 {
        color: #1a1a1a !important;
        -webkit-text-fill-color: #1a1a1a !important;
      }
      
      /* Nuclear option - catch everything in light mode */
      body:not([data-scheme="dark"]) [data-sanity] * h1,
      body:not([data-scheme="dark"]) [data-sanity] * h2,
      body:not([data-scheme="dark"]) [data-sanity] * h3,
      body:not([data-scheme="dark"]) [data-sanity] * h4,
      body:not([data-scheme="dark"]) [data-sanity] * h5,
      body:not([data-scheme="dark"]) [data-sanity] * h6,
      [data-scheme="light"] [data-sanity] * h1,
      [data-scheme="light"] [data-sanity] * h2,
      [data-scheme="light"] [data-sanity] * h3,
      [data-scheme="light"] [data-sanity] * h4,
      [data-scheme="light"] [data-sanity] * h5,
      [data-scheme="light"] [data-sanity] * h6 {
        color: #1a1a1a !important;
        -webkit-text-fill-color: #1a1a1a !important;
      }
    `
    
      // Append to head
      document.head.appendChild(style)
    }
    
    // Apply styles immediately
    applyStyles()
    
    // Also apply after a short delay to catch late-loading elements
    const timeoutId = setTimeout(() => {
      applyStyles()
    }, 100)
    
    // Watch for theme changes (in case Sanity Studio changes theme dynamically)
    const observer = new MutationObserver(() => {
      applyStyles()
    })
    
    // Observe body for attribute changes (theme changes)
    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['data-scheme', 'class']
      })
    }
    
    // Observe html for attribute changes
    if (document.documentElement) {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-scheme', 'class']
      })
    }
    
    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
      const styleToRemove = document.getElementById(styleId)
      if (styleToRemove) {
        styleToRemove.remove()
      }
    }
  }, [])

  return null
}

