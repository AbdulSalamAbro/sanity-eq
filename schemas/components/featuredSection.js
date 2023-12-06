// featuredSection.js

export default {
    name: 'featuredSection',
    title: 'Featured Section',
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
      {
        name: 'relatedInsights',
        title: 'Related Insights',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'Insight' }], 
          },
        ],
      },
    ],
  };
  