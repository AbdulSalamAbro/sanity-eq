// author.js

export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the author',
      },
      {
        name: 'designation',
        title: 'Designation',
        type: 'string',
        description: 'The designation or role of the author',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image hotspot for cropping
        },
        description: 'The image of the author',
      },
    ],
  };
  