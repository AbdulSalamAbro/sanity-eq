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
        type: 'Hero',
       
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


      // secondary navbar

      {
        name: 'secondaryNavbar',
        title: 'Secondary Navbar',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'id',
                title: 'id',
                type: 'string',
              },
              {
                name: 'label',
                title: 'label',
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

      // popular insights
      {
        name: 'popularInsights',
        title: 'Popular Insights',
        type: 'object',
        fields: [
          // Field for referencing an Insight document
          {
            name: 'CoverInsight',
            title: 'Cover Insight',
            type: 'reference',
            to: [{ type: 'Insight' }],
          },
          // Field for an array of featuredSection references
          {
            name: 'relatedInsights',
            title: 'Related Insights',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'featuredSection' }],
              },
            ],
          },
        ],
      },
      
      {
        name: 'caseStudies',
        title: 'Case Studies',
        type: 'array',
        of: [
         
          {
            type: 'reference',
            to: [{ type: 'featuredSection' }],
          },
        ],
      },


          {
            name: 'quoteSection',
            title: 'Quote Section',
            type: 'reference',
            to: [{ type: 'quoteSection' }],
          },
 
          {
            name: 'FeaturedEvents',
            title: 'Featured Events',
            type: 'array',
            of: [
             
              {
                type: 'reference',
                to: [{ type: 'featuredSection' }],
              },
            ],
          },
    

          {
            name: 'report',
            title: 'Report Section',
            type: 'reportField',
          },

           // Grid of blog posts with a title
      
       {
        name: 'InsightsPostGrid',
        title: 'Insights Post Grid',
        type: 'array',
        of: [
         
          {
            type: 'reference',
            to: [{ type: 'featuredSection' }],
          },
        ],
      },


           // couresel and insights

      {
        name: 'carousel',
        title: 'Carousel',
        type: 'object',
        fields: [
          // Field for an array of images
          {
            name: 'CarouselImages',
            title: 'Carousel Images',
            type: 'array',
            of: [
              {
                type: 'image',
              },
            ],
          },
          // Field for the Insights Post Grid
          {
            name: 'insights',
            title: 'Insights',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'featuredSection' }],
              },
            ],
          },
        ],
      },


           // Featured Media
      
           {
            name: 'FeaturedMedia',
            title: 'Featured Media',
            type: 'array',
            of: [
             
              {
                type: 'reference',
                to: [{ type: 'featuredSection' }],
              },
            ],
          },

             // Podcast section
          {
            name: 'podcast',
            title: 'Podcast Section',
            type: 'podcast',
          },

          


            // Top Insights
      
            {
              name: 'TopInsights',
              title: 'Top Insights',
              type: 'array',
              of: [
               
                {
                  type: 'reference',
                  to: [{ type: 'featuredSection' }],
                },
              ],
            },

            {
              name: 'Newsletter',
              title: 'Newsletter',
              type: 'reference',
              to: [{ type: 'Newsletter' }],
            },

             // More Insights
      
             {
              name: 'MoreInsights',
              title: 'More Insights',
              type: 'array',
              of: [
               
                {
                  type: 'reference',
                  to: [{ type: 'featuredSection' }],
                },
              ],
            },

            // Featured Service 
    {
      name: 'featuredService',
      title: 'Featured Service',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
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
      ],
    },

    {
      name: 'CTA',
      title: 'CTA',
      type: 'reference',
      to: [{ type: 'CTA' }],
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
