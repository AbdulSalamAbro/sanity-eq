// MySchemaWithBanner.js

export default {
    name: 'Banners',
    title: 'Banners',
    type: 'document',
    fields: [
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
        name: 'banners',
        title: 'Banners',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'Banner' }], // Replace 'banner' with the actual type name of your banner schema
          },
        ],
      },
    ],
  };
  