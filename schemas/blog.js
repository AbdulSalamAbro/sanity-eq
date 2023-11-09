// Blog Schema
export default {
  name: 'Insight',
  title: 'Insights',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'imgHeading',
      title: 'Image Heading',
      type: 'string',
    },
    
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'string',
    // },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      default: 'now',
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shortText',
      title: 'Short Text',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'readMore',
      title: 'Read More Button',
      type: 'ReadMore', // Reference to the ReadMore schema
      description: '"Read More" link'
    },
    {
      name: 'PrimaryTag',
      title: "Primary Tag",
      type: 'reference',
      to: [{ type: 'tag' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'SecondaryTags',
      title: 'Secondary Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }]
        },
      ],
    },
  ],
}
