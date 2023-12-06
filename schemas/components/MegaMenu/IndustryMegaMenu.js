// InsightsMegaMenu.js

export default {
    name: 'IndustryMegaMenu',
    title: 'Industry Mega Menu',
    type: 'document',
    fields: [
      {
        name: 'MenuContent',
        title: 'First & second Column',
        type: 'MegaMenuContent',
      },
      {
        name: 'thirdColumn',
        title: 'Third Column',
        type: 'object',
        fields: [

            {
                name: 'subcategories',
                title: 'Subcategories',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'title',
                        title: 'Subcategory Title',
                        type: 'string',
                      },
                      {
                        name: 'target',
                        title: 'Subcategory Target',
                        type: 'string',
                      },
                    ],
                  },
                ],
              },
            {
                name: 'articles',
                title: 'Articles',
                type: 'array',
                of: [
                  {
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
      },
    ],
  };
  