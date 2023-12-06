// awardSection.js

export default {
    name: 'awardSection',
    title: 'Award Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3, // Adjust as needed
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'awards',
        title: 'Awards',
        type: 'array',
        of: [
          {
            type: 'object',
            title: 'Award',
            fields: [
              {
                name: 'awardTitle',
                title: 'Award Title',
                type: 'string',
              },
              {
                name: 'awardDescription',
                title: 'Award Description',
                type: 'array',
                of: [
                  {
                    type: 'block',
                    styles: [
                      { title: 'Normal', value: 'normal' },
                      { title: 'H2', value: 'h2' },
                      // Add other styles as needed
                    ],
                    lists: [],
                    marks: {
                      decorators: [
                        { title: 'Bold', value: 'strong' },
                        { title: 'Italic', value: 'em' },
                        // Add other decorators as needed
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        name: 'ReadMore',
        title: 'ReadMore',
        type: 'ReadMore',
        
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  };
  