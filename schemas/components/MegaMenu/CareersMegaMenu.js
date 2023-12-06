// InsightsMegaMenu.js

export default {
    name: 'CareerMegaMenu',
    title: 'Career Mega Menu',
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
      },
    ],
  };
  