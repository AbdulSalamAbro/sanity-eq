

export default {
    name: 'singleFeaturedInsight',
    title: 'Single Featured Insight',
    type: 'document',
    fields: [
        {
          name: 'show',
          title: 'Show',
          type: 'boolean',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string'
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
  };
  