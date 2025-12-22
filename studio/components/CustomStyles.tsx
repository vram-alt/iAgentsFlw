import { useEffect } from 'react'

export function CustomStyles() {
  useEffect(() => {
    // Inject custom CSS for PortableText heading colors
    const style = document.createElement('style')
    style.textContent = `
      /* Fix heading colors in PortableText editor - use default text color instead of white */
      [data-slate-editor] h1,
      [data-slate-editor] h2,
      [data-slate-editor] h3,
      [data-slate-editor] h4,
      [data-slate-editor] h5,
      [data-slate-editor] h6 {
        color: inherit !important;
      }

      /* Ensure block content uses default text color */
      [data-slate-editor] {
        color: inherit;
      }

      /* Fix heading styles in the editor */
      [data-slate-editor] h1 {
        font-size: 2em;
        font-weight: bold;
        margin-top: 0.67em;
        margin-bottom: 0.67em;
        color: inherit !important;
      }

      [data-slate-editor] h2 {
        font-size: 1.5em;
        font-weight: bold;
        margin-top: 0.83em;
        margin-bottom: 0.83em;
        color: inherit !important;
      }

      [data-slate-editor] h3 {
        font-size: 1.17em;
        font-weight: bold;
        margin-top: 1em;
        margin-bottom: 1em;
        color: inherit !important;
      }

      [data-slate-editor] h4 {
        font-size: 1em;
        font-weight: bold;
        margin-top: 1.33em;
        margin-bottom: 1.33em;
        color: inherit !important;
      }

      /* Alternative selectors for Sanity Studio v3 */
      [data-ui="PortableTextInput"] h1,
      [data-ui="PortableTextInput"] h2,
      [data-ui="PortableTextInput"] h3,
      [data-ui="PortableTextInput"] h4,
      [data-ui="PortableTextInput"] h5,
      [data-ui="PortableTextInput"] h6 {
        color: inherit !important;
      }

      /* Block content editor */
      [data-ui="BlockEditor"] h1,
      [data-ui="BlockEditor"] h2,
      [data-ui="BlockEditor"] h3,
      [data-ui="BlockEditor"] h4,
      [data-ui="BlockEditor"] h5,
      [data-ui="BlockEditor"] h6 {
        color: inherit !important;
      }

      /* Fix for PortableText input specifically */
      [data-slate-editor="true"] h1,
      [data-slate-editor="true"] h2,
      [data-slate-editor="true"] h3,
      [data-slate-editor="true"] h4,
      [data-slate-editor="true"] h5,
      [data-slate-editor="true"] h6 {
        color: inherit !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

