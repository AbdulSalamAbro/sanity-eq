// titleAndDescription.js

export default {
    name: 'titleAndDescription',
    title: 'Title and Description',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'sectionDescription',
        title: 'Section Description',
        type: 'array',
        of: [{ type: 'block' }], // You can use portable text or other rich text options here
      },
      // Add more fields as needed
    ],

    preview: {
   
      select: {
        customTitle: 'sectionTitle',
      },
    
      prepare({customTitle}) {
        return {
          title: `Text Section: ${customTitle}`, //  custom name
          subtitle: 'Title and Decription section'
        };
      },
    },
  };
  