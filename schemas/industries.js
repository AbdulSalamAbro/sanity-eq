// Industries Page Schema
export default // Industries Page Schema
  {
    name: 'IndustriesPage',
    title: 'Industries Page',
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
        name: 'bannerSection',
        title: 'Banner Section',
        type: 'Banner',
    
      },


        // Industries Grid
      {
        name: 'Industries',
        title: "Industries",
        type: 'object',
        fields: [

        
            {
                name: 'Title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'Description',
                title: 'Description',
                type: 'string',
              },
        
          
          {
            name: 'Industry',
            title: 'Industry',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'Industry' }],
              },
            ],
          },
        ]
      },

      {
        name: 'Newsletter',
        title: 'Newsletter',
        type: 'reference',
        to: [{ type: 'Newsletter' }],
      },
      
       // Top Industry Insights
       {
        name: 'TopIndustrynIsights',
        title: 'Top Industry Insights',
        type: 'array',
        of: [
         
          {
            type: 'reference',
            to: [{ type: 'featuredSection' }],
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
