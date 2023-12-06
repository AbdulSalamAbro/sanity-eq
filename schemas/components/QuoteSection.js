
export default {
    name: 'quoteSection',
    title: 'Quote Section',
    type: 'document',
    fields: [
      {
        name: 'label',
        title: 'Label',
        type: 'string',
      },
      {
        name: 'quote',
        title: 'Quote',
        type: 'text',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
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
        customTitle: 'name',
      },
    
      prepare({customTitle}) {
        return {
          title: `Qoute Section: ${customTitle}`, //  custom name
          
        };
      },
    },
  };
  