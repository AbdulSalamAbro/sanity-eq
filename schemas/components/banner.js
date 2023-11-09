// Banner Schema
export default {
    name: 'Banner',
    title: 'Banner Section',
    type: 'document',
    fields: [
      // Banner Section

      // Banner Name
      {
        name: 'BannerName',
        title: 'Banner Name',
        type: 'string',
      },

      {
        name: 'BannerHeaderOne',
        title: 'Banner Header One',
        type: 'string',
      },
      {
        name: 'BannerHeaderTwo',
        title: 'Banner Header Two',
        type: 'string',
      },

      {
        name: 'BannerDescription',
        title: 'Banner Description',
        type: 'string',
      },

      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'BannerName', // Use the heroName field as the source for the slug
          slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'), // Customize the slug generation if needed
        },
      }
      
    ],
  }
  