// recruitmentProcess.js

export default {
    name: 'recruitmentProcess',
    title: 'Recruitment Process',
    type: 'object',
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
        name: 'processList',
        title: 'Recruitment Process List',
        type: 'array',
        of: [
          {
            type: 'object',
            title: 'Process Item',
            fields: [
              {
                name: 'itemTitle',
                title: 'Item Title',
                type: 'string',
              },
              {
                name: 'itemDescription',
                title: 'Item Description',
                type: 'text',
                rows: 3, // Adjust as needed
              },
            ],
          },
        ],
      },

      {
        name: 'button',
        title: 'Button',
        type: 'object',
        fields: [
          {
            name: 'label',
            title: 'Button Label',
            type: 'string',
          },
          {
            name: 'target',
            title: 'Button Target',
            type: 'string',
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  };
  