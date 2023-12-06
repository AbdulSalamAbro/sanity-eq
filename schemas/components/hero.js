// Hero Schema
export default {
    name: 'Hero',
    title: 'Hero Section',
    type: 'object',
    fields: [
      // Hero Section

     

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
            name: 'heroLabel',
            title: 'Hero Label',
            type: 'string',
          },
          {
            name: 'heroTitle',
            title: 'Hero Title',
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
            type: 'string',
          },
        ]
      },

     
      
    ],
  }
  