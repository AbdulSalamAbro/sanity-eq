// portableText.js

export default {
    name: 'portableText',
    title: 'Portable Text',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'Heading 1', value: 'h1' },
          { title: 'Heading 2', value: 'h2' },
          { title: 'Heading 3', value: 'h3' },
          { title: 'Heading 4', value: 'h4' },
          { title: 'Heading 5', value: 'h5' },
          { title: 'Heading 6', value: 'h6' },
          { title: 'Quote', value: 'blockquote' },
          { title: 'Code', value: 'code' },
          // Add styles as needed
        ],
        lists: [
          { title: 'Bullet', value: 'bullet' },
          { title: 'Number', value: 'number' },
        ],
        marks: {
          decorators: [
            { title: 'Bold', value: 'strong' },
            { title: 'Italic', value: 'em' },
            { title: 'Underline', value: 'underline' },
            { title: 'Strike-through', value: 'strike-through' },
            // Add other decorators as needed
          ],
        },
      },
    ],
  };
  