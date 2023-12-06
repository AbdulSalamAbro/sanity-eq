// InsightsMegaMenu.js

export default {
    name: 'InsightsMegaMenu',
    title: 'Insights Mega Menu',
    type: 'document',
    fields: [
      {
        name: 'MenuContent',
        title: 'Menu Content',
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
              {
                name: 'image',
                title: 'Article Image',
                type: 'image',
              },
            ],
          },
         
        ],
      },
    ],
  };
  