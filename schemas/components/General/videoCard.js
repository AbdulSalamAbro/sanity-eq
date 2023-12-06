// videoCard.js

export default {
    name: 'videoCard',
    title: 'Video Card',
    type: 'document',
    fields: [
      {
        name: 'label',
        title: 'Label',
        type: 'string',
        description: 'The label for the video card',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of the video card',
      },
      {
        name: 'button',
        title: 'Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
            description: 'The text for the button',
          },
          {
            name: 'target',
            title: 'Button Target',
            type: 'string',
            description: 'The target when the button is clicked',
          },
        ],
        description: 'The button for the video card',
      },
      {
        name: 'video',
        title: 'Video',
        type: 'file',
        description: 'Upload or choose a video file for the card',
      },
    ],

    preview: {
   
        select: {
          customTitle: 'title',
        },
      
        prepare({customTitle}) {
          return {
            title: `Video Card Section: ${customTitle}`, //  custom name
            
          };
        },
      },
  };
  