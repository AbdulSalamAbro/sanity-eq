export default {

    name: 'talkWithUsSection',
    title: 'Talk with Us Section',
    type: 'document',

    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'features',
        title: 'Section Features',
        type: 'array',
        of: [
          {
            type: 'string',
            title: 'Feature',
          },
        ],
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'contactButtonText',
        title: 'Contact Button Text',
        type: 'string',
      },
    ],
  }
  