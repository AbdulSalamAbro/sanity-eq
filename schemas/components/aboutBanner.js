
  // aboutBanner.js
  
  export default {
    name: 'aboutBanner',
    title: 'About Banner',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'portableText',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 6, // Adjust as needed
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
  };
  