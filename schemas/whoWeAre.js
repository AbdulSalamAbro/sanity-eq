// Career Page Schema
export default // Career Page Schema
  {
    name: 'WhoWeArePage',
    title: 'Who We Are Page',
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
        type: 'Hero' 
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
        name: 'InfoCards',
        title: 'Info Cards',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'imageCard1',
            title: 'Image Card 1',
            type: 'reference',
            to: [{ type: 'imageCard' }], // Assuming you have an imageCard schema
          },
          {
            name: 'imageCard2',
            title: 'Image Card 2',
            type: 'reference',
            to: [{ type: 'imageCard' }], // Assuming you have an imageCard schema
          },
        ],
      },

      {
        name: 'OurPeople',
        title: 'Our People',
        type: 'reference',
        to: [{ type: 'ContentCardSection' }], 
      },


      
      {
          name: 'infoContentAndCards',
          title: 'Info Content',
          type: 'reference',
          to: [{ type: 'infoContentAndCards' }],
        },
        {
          name: 'QuoteSection',
          title: 'Quote Section',
          type: 'reference',
          to: [{ type: 'quoteSection' }],
        },

        {
            name: 'FeaturedSection1',
            title: 'Featured Section 1',
            type: 'reference',
            to: [{ type: 'featuredSection' }],
          },

          {
            name: 'StoriesSection1',
            title: 'Stories Section 1',
            type: 'reference',
            to: [{ type: 'ContentCardSection' }],
          },

          {
            name: 'Banners',
            title: 'Banners',
            type: 'reference',
            to: [{ type: 'Banners' }],
          },

          {
            name: 'FeaturedSection2',
            title: 'Featured Section 2',
            type: 'reference',
            to: [{ type: 'featuredSection' }],
          },

          {
            name: 'InfoCard3',
            title: 'Info Card 3',
            type: 'reference',
            to: [{ type: 'imageCard' }], 
          },

          {
            name: 'StoriesSection2',
            title: 'Stories Section 2',
            type: 'reference',
            to: [{ type: 'ContentCardSection' }],
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
