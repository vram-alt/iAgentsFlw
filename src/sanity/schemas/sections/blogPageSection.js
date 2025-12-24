// ./schemas/sections/homeAboutSection.ts
import { defineType, defineField } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const blogPageSection = defineType({
  name: "blogPageSection",
  title: "Blog Page Section",
  type: "object",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main heading text. Supports bold/inline marks.",
    }),    
    defineField({
      name: 'subheading',
      title: 'Section Subheading',
      type: 'string',
      description: 'Subtitle or tagline under the heading',
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "heading",
      media: "images.0",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Blog Page Section",
        subtitle: "About section with heading, description, features & CTA",
        media,
      };
    },
  },
});
