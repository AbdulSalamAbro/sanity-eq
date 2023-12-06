// whoWeAreCard.js

export const ContentCard = {
    name: 'ContentCard',
    title: 'Content Card',
   
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
            type: 'url',
          },
        ],
      },
    ],
  };
  
  // whoWeAreSection.js
  
  export default {
    name: 'ContentCardSection',
    title: 'Content & Cards Section',
    description: 'Title,Desc with multiple cards.',
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
        name: 'Cards',
        title: 'Cards',
        type: 'array',
        of: [
          {
            type: 'ContentCard',
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
        customTitle: 'title',
      },
    
      prepare({customTitle}) {
        return {
          title: `Content with Cards Section: ${customTitle}`, //  custom name
          
        };
      },
    },
  };
  