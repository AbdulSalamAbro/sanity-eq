
  // contentSection.js
  
  export default {
    name: 'contentSection',
    title: 'Content Section',
    type: 'document',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string',
          },
      {
        name: 'title',
        title: 'Title',
        type: 'portableText',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'portableText',
      },
      {
        name: 'imagePosition',
        title: 'Image Position',
        type: 'string',
        options: {
          list: [
            { title: 'Left', value: 'left' },
            { title: 'Right', value: 'right' },
            { title: 'Background', value: 'background' },
          ],
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
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
          imageUrl: 'image.asset.url',
        },
      },
  };
  