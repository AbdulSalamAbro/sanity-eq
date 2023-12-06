// podcast.js

export default {
    name: 'podcast',
    title: 'Podcast',
    type: 'document',
    fields: [
      {
        name: 'hostName',
        title: 'Host Name',
        type: 'string',
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
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'bgImage',
        title: 'BG Image',
        type: 'image',
      },
      {
        name: 'episodeNumber',
        title: 'Episode Number',
        type: 'number',
      },
      {
        name: 'watchTime',
        title: 'Watch Time (in minutes)',
        type: 'number',
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
          },
        ],
      },
    ],

    preview: {
   
      select: {
        customTitle: 'hostName',
      },
    
      prepare({customTitle}) {
        return {
          title: `Podcast Section: ${customTitle}`, //  custom name
          
        };
      },
    },
  };
  