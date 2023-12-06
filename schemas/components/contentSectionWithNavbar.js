// contentSectionWithNavbar.js

export default {
    name: 'contentSectionWithNavbar',
    title: 'Content Section with Navbar',
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
        name: 'contentSections',
        title: 'Content Sections',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'contentSection' }], 
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  };
  