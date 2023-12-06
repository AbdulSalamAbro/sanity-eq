// About Page Schema
export default // About Page Schema
  {
    name: 'AboutPage',
    title: 'About Page',
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
      
      {
        name: 'contentSection',
        title: 'About Banner',
        type: 'reference',
        to: [{ type: 'contentSection' }],
      }, 
     
      {
        name: 'contentSection2',
        title: 'Content Section 2',
        type: 'reference',
        to: [{ type: 'contentSection' }],
      },

      {
        name: 'contentSectio3',
        title: 'Content Section 3',
        type: 'reference',
        to: [{ type: 'contentSection' }],
      },


      {
        name: 'contentSection4',
        title: 'Content Section 4',
        type: 'reference',
        to: [{ type: 'contentSection' }],
      },

      {
        name: 'contentSectionWithNavbar',
        title: 'Content Section (with navbar)',
        type: 'reference',
        to: [{ type: 'contentSectionWithNavbar' }],
      },
      
      
        {
            name: 'QuoteSection',
            title: 'Quote Section',
            type: 'reference',
            to: [{ type: 'quoteSection' }],
          },
    


      {
        name: 'whoWeAreSection',
        title: 'Who We Are Section',
        description: "Who We Are Section with no image cards",
      
        type: 'reference',
        to: [{ type: 'ContentCardSection' }],
      },
      
      {
        name: 'contentSectionWithNavbar2',
        title: 'Content Section (with navbar)',
        type: 'reference',
        to: [{ type: 'contentSectionWithNavbar' }],
      },

      {
        name: 'whoWeAreSectionWithPic',
        title: 'Who We Are Cards',
        description: "Who We Are Section with image cards",
        type: 'reference',
        to: [{ type: 'ContentCardSection' }],
        
      },

      {
        name: 'InsightsGrid',
        title: 'Insights Grid',
        type: 'array',
        of: [
         
          {
            type: 'reference',
            to: [{ type: 'featuredSection' }],
          },
        ],
      },

      {
        name: 'awardSection',
        title: 'Awards Section',
        type: 'awardSection',
        
      },

      {
        name: 'InsightsGrid2',
        title: 'Get to know us Grid',
        type: 'array',
        of: [
         
          {
            type: 'reference',
            to: [{ type: 'featuredSection' }],
          },
        ],
      },
      

      {
        name: 'exploreMore',
        title: 'Explore More',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
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
        ]},


        {
            name: 'contentSection5',
            title: 'Content Section 5',
            type: 'reference',
            to: [{ type: 'contentSection' }],
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
