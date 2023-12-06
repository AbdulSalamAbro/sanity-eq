// insightBanner.js

export default {
    name: 'insightBanner',
    title: 'Insight Banner',
    type: 'object',
    fields: [
      {
        name: 'label',
        title: 'Label',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'readTime',
        title: 'Read Time',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
      },
      {
        name: 'previousButton',
        title: 'Previous Button',
        type: 'object',
        fields: [
          { name: 'text', title: 'Text', type: 'string' },
          { name: 'target', title: 'Target', type: 'string' },
          { name: 'readTime', title: 'Read Time', type: 'string' },
        ],
      },
      {
        name: 'nextButton',
        title: 'Next Button',
        type: 'object',
        fields: [
          { name: 'text', title: 'Text', type: 'string' },
          { name: 'target', title: 'Target', type: 'string' },
          { name: 'readTime', title: 'Read Time', type: 'string' },
        ],
      },
    ],
  };
  