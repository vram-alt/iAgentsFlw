# Sanity Studio Setup Instructions

Sanity Studio has been successfully integrated into your React project. Here's what has been set up and what you need to do next.

## What's Been Configured

✅ **Studio Folder Structure**
- Created `studio/` folder with Sanity configuration
- Created basic blog schema (Post, Author, Category)
- Configured with your project ID: `et4gt387`
- Dataset: `production`
- Base path: `/studio`

✅ **React Integration**
- Created `src/pages/Studio.tsx` component
- Added `/studio/*` route to `src/App.tsx`
- Studio will be accessible at `http://localhost:8080/studio`

✅ **Schema Files**
- `studio/schemas/post.ts` - Blog post schema
- `studio/schemas/author.ts` - Author schema  
- `studio/schemas/category.ts` - Category schema
- `studio/schemas/index.ts` - Schema exports

## Next Steps

### 1. Install Dependencies

You need to install the Sanity packages. Run this command in your project root:

```bash
npm install sanity @sanity/client @sanity/vision
```

**Note**: If you encounter PowerShell execution policy issues on Windows, you can:
- Use `npm.cmd` instead of `npm`
- Or run PowerShell as Administrator and set execution policy: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

### 2. Start Development Server

After installing dependencies, start your development server:

```bash
npm run dev
```

The site will run on `http://localhost:8080` and Sanity Studio will be available at `http://localhost:8080/studio`.

### 3. Authenticate with Sanity

When you first access the studio at `http://localhost:8080/studio`, you'll be prompted to:
- Sign in with your Sanity account
- Grant access to the project `et4gt387`

## Project Configuration

- **Project ID**: `et4gt387`
- **Dataset**: `production`
- **Studio URL**: `http://localhost:8080/studio`

## Schema Overview

### Post Schema
- Title (required)
- Slug (auto-generated from title)
- Author (reference)
- Main image with alt text
- Categories (array of references)
- Published date
- Excerpt
- Body (rich text with images)

### Author Schema
- Name (required)
- Slug
- Image with alt text
- Bio (rich text)

### Category Schema
- Title (required)
- Slug (required, auto-generated)
- Description

## File Structure

```
icomply/
├── studio/
│   ├── schemas/
│   │   ├── index.ts
│   │   ├── post.ts
│   │   ├── author.ts
│   │   └── category.ts
│   ├── sanity.config.ts
│   ├── tsconfig.json
│   └── README.md
├── src/
│   └── pages/
│       └── Studio.tsx
└── package.json (updated with Sanity dependencies)
```

## Troubleshooting

If you encounter any issues:

1. **Studio not loading**: Make sure all dependencies are installed
2. **Authentication errors**: Verify project ID `et4gt387` is correct and you have access
3. **Build errors**: Check that TypeScript types are properly configured
4. **Styling issues**: The Studio CSS is imported automatically via `sanity/styles/global.css`

## Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Schema Types Reference](https://www.sanity.io/docs/schema-types)
- [Studio Configuration](https://www.sanity.io/docs/structure-builder)


