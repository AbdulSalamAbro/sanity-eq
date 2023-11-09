// Hero Schema
export default {
    name: 'Hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
      // Hero Section

      // Hero Name
      {
        name: 'heroName',
        title: 'Hero Name',
        type: 'string',
      },
      

      {
        name: 'hero',
        title: 'Hero Section',
        type: 'object',
        fields: [
          {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'heroHeader',
            title: 'Hero Header',
            type: 'string',
          },
          {
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'string',
          },
          {
            name: 'heroButton',
            title: 'Hero Button Text',
            type: 'string',
          },
          {
            name: 'heroButtonLink',
            title: 'Hero Button Link',
            type: 'url',
          },
        ]
      },

      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'heroName', // Use the heroName field as the source for the slug
          slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'), // Customize the slug generation if needed
        },
      }
      
    ],
  }
  