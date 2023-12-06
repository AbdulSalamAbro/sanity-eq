// Career Page Schema
export default // Career Page Schema
  {
    name: 'CareerPage',
    title: 'Career Page',
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
        name: 'careersBanner',
        title: 'Careers Banner',
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
          {
            name: 'contentSection',
            title: 'Content Section',
            type: 'reference',
            to: [{ type: 'contentSection' }], 
          },
        ],

      },
      
      {
        name: 'WorkWithUs',
        title: 'Work with us',
        description: "Team Section with no image cards",
        type: 'reference',
        to: [{ type: 'ContentCardSection' }],
        
      },

      {
        name: 'contentSection1',
        title: 'Content Section 1',
        type: 'reference',
        to: [{ type: 'contentSection' }], 
      },

      {
        name: 'OurValues',
        title: 'Our Values',
       
        type: 'reference',
        to: [{ type: 'ContentCardSection' }],
        
      },

      {
        name: 'contentSection2',
        title: 'Content Section 2',
        type: 'reference',
        to: [{ type: 'contentSection' }], 
      },


      {
        name: 'OurTeams',
        title: 'Our Teams',
        description: "Team Section with no image cards",
        type: 'reference',
        to: [{ type: 'ContentCardSection' }],
    
      },


      {
        name: 'QuoteSectionMain',
        title: 'Quote Section',
        type: 'reference',
        to: [{ type: 'quoteSection' }],
      },

      {
        name: 'QuoteSectionCards',
        title: 'Quote Section Cards',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'quoteSection' }] }]
      },
   

      {
        name: 'Opportunities',
        title: 'Opportunities',
      
        type: 'reference',
        to: [{ type: 'ContentCardSection' }],
    
      },
      
      {
        name: 'recruitmentProcess',
        title: 'Recruitment Process',
      
        type: 'recruitmentProcess',
    
      },

      {
        name: 'Newsletter',
        title: 'Newsletter',
        type: 'reference',
        to: [{ type: 'Newsletter' }],
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
