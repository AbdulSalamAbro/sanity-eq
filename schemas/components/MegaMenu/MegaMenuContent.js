// MegaMenuContent.js

export default {
    name: 'MegaMenuContent',
    title: 'Mega Menu Content',
    type: 'object',
    fields: [
      {
        name: 'firstColumn',
        title: 'First Column',
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
      },
      {
        name: 'secondColumn',
        title: 'Second Column',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Link Title',
                type: 'string',
              },
              {
                name: 'target',
                title: 'Link Target',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  };
  