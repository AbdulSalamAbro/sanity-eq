// InsightsMegaMenu.js

export default {
    name: 'AboutMegaMenu',
    title: 'About Mega Menu',
    type: 'document',
    fields: [
      {
        name: 'MenuContent',
        title: 'MenuContent',
        type: 'MegaMenuContent',
      },
      {
        name: 'thirdColumn',
        title: 'Third Column',
        type: 'object',
        fields: [
          {
            name: 'article',
            title: 'Article',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Article Title',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Article Description',
                type: 'text',
              },
             
            ],
          },
         
        ],
      },
    ],
  };
  