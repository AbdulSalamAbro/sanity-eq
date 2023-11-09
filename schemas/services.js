// Services Page Schema
export default // Services Page Schema
  {
    name: 'servicesPage',
    title: 'Services Page',
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
