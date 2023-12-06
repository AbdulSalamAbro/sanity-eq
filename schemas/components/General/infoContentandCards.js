export default {
    name: 'infoContentAndCards',
    title: 'Info Content',
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
      },
      {
        name: 'cards',
        title: 'Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'icon',
                title: 'Icon',
                type: 'image', // You can replace 'image' with the appropriate type for your icons
              },
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  };