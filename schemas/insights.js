// Insights Page Schema
export default // Insights Page Schema
  {
    name: 'InsightsPage',
    title: 'Insights Page',
    type: 'document',
    fields: [
      // Hero Section
      {
        name: 'PageName',
        title: 'Page Name',
        type: 'string',
      },
      {
        name: 'heroSection',
        title: 'Hero Section',
        type: 'reference',
        to: [{ type: 'Hero' }], // Reference the 'Hero' document type
      },

     
      {
        name: 'trendingTopics',
        title: 'Trending Topics',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Text',
                type: 'string',
              },
              {
                name: 'href',
                title: 'Href',
                type: 'string',
              },
            ],
          },
        ],
      },

      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'PageName', // Use the heroName field as the source for the slug
          slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'), // Customize the slug generation if needed
        },
      }
    ]
  }
