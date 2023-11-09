
  // Define a schema for the industry
  export default {
    name: 'Industry',
    title: 'Industry',
    type: 'document',
    fields: [
        
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'titleLink',
        title: 'Title (Link)',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'buttons',
        title: 'Buttons',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Button Text',
                type: 'string',
              },
              {
                name: 'link',
                title: 'Button Link',
                type: 'string',
              },
            ],
          },
        ],
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title', // Use the heroName field as the source for the slug
          slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'), // Customize the slug generation if needed
        },
      }
    ],
   
      
  }
  