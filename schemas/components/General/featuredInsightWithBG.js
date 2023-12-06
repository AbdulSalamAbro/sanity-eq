

export default {
    name: 'FeaturedInsightWithBG',
    title: 'Featured Insight With Backgroud Image',
    type: 'document',
    fields: [
        {
          name: 'show',
          title: 'Show',
          type: 'boolean',
        },
        {
            name: 'bgImage',
            title: 'BG Image',
            type: 'image',
          },
          {
            name: 'FooterText',
            title: 'Footer Text',
            description: 'References Text',
            type: 'string',
          },
        {
          name: 'featuredInsight',
          title: 'Featured Insight',
          type: 'reference',
          to: [{ type: 'Insight' }],
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
   
        // select: {
        //   customTitle: 'name',
        // },
      
        prepare({}) {
          return {
            title: `Insight with BG Image Section`, //  custom name
            
          };
        },
      },
  };
  