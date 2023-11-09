export default {
    name: 'Newsletter',
    title: 'Newsletter',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Section Description',
        type: 'text',
      },
      {
        name: 'newsletterForm',
        title: 'Newsletter Form',
        type: 'object',
        fields: [
          {
            name: 'formTitle',
            title: 'Form Title',
            type: 'string',
          },
          {
            name: 'formDescription',
            title: 'Form Description',
            type: 'text',
          },
          {
            name: 'placeholder',
            title: 'Email Placeholder',
            type: 'string',
          },
          {
            name: 'submitButton',
            title: 'Submit Button Text',
            type: 'string',
          },
        ],
      },
    ],
  }
  