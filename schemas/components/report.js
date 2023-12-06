// reportField.js

export default {
    name: 'reportField',
    title: 'Report',
    type: 'object',
    fields: [
      {
        name: 'label',
        title: 'Label',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'downloadButton',
        title: 'Download Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
          },
          {
            name: 'file',
            title: 'File',
            type: 'file',
          },
        ],
      },
    ],
  };
  