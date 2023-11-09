// Home Page Schema
export default // Home Page Schema
  {
    name: 'homePage',
    title: 'Home Page',
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


      // Blogs First Grid
      {
        name: 'ThreeInsightCards',
        title: "Three Insight Cards",
        type: 'object',
        fields: [
          {
            name: "show",
            title: "Show",
            type: "boolean"
          },
          {
            name: 'Insights',
            title: 'Insights',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'Insight' }],
              },
            ],
          },
        ]
      },

      // Featured Blog Card (Full Width)
      {
        name: 'FeaturedInsightCardFullWidth',
        title: "Featured Insight Card (Full Width)",
        type: 'object',
        fields: [
          {
            name: "show",
            title: "Show",
            type: 'boolean'
          },
          {
            name: 'featuredInsights',
            title: "Featured Insights",
            type: 'reference',
            to: [{ type: 'Insight' }],
          }
        ]
      },

      // Feature Card Section
      {
        name: 'FeaturedInsightCardsFiftyWidth',
        title: "Featured Insights Cards (50% Width Each)",
        type: 'object',
        fields: [
          {
            name: "show",
            title: "Show",
            type: 'boolean'
          },
          {
            name: 'featuredInsights',
            title: 'Featured Insights (Max 2)',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'Insight' }], // Reference to the 'tag' document type
              },
            ],
            validation: (Rule) => Rule.max(2).error('You can only select up to 2 Insights for featuredInsights.'),
          },
        ]
      },

     

      // Styled Featured Blog Card (Full Width)
      {
        name: 'StyledFeaturedInsightCard',
        title: "Styled Featured Insights Card",
        type: 'object',
        fields: [
          {
            name: "show",
            title: "Show",
            type: 'boolean'
          },
          {
            name: 'featuredInsights',
            title: "Featured Insights",
            type: 'reference',
            to: [{ type: 'Insight' }],
          }
        ]
      },

      // Styled Featured Blog Card
      {
        name: 'StyledFeaturedInsightCard2',
        title: "Styled Featured Insight Card 2",
        type: 'object',
        fields: [
          {
            name: "show",
            title: "Show",
            type: 'boolean'
          },
          {
            name: 'featuredInsight',
            title: "Featured Insight",
            type: 'reference',
            to: [{ type: 'Insight' }],
          }
        ]
      },

      // Grid of blog posts with a title
      {
        name: 'InsightsPostGrid',
        title: 'Insights Post Grid',
        type: 'object',
        fields: [
          {
            name: "show",
            title: "Show",
            type: "boolean"
          },
          {
            name: "title",
            title: "Title",
            type: "string"
          },
          {
            name: 'InsightCards',
            title: 'Insight Cards',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'Insight' }],
              },
            ],
          },
        ]
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
