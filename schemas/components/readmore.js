// ReadMore schema
export default {
    name: 'ReadMore',
    title: 'Read More',
    type: 'object',
    fields: [
      {
        name: 'label',
        title: 'Label',
        type: 'string',
        description: 'The label for the "Read More" link.'
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
        description: 'The URL for the "Read More".'
      }
    ]
  }
  