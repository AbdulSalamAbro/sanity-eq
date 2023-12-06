// imageCard.js

export default {
    name: 'imageCard',
    title: 'Image Card',
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
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'imagePosition',
        title: 'Image Position',
        type: 'string',
        options: {
          list: [
            { title: 'Left', value: 'left' },
            { title: 'Right', value: 'right' },
          ],
        },
      },
    ],

    preview: {
   
      select: {
        customTitle: 'title',
      },
    
      prepare({customTitle}) {
        return {
          title: `Image Card Section: ${customTitle}`, //  custom name
          
        };
      },
    },
  };
  