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
      description: 'Title that appears on Insight card.'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description that appears on Insight card.'
    },
    {
    name: 'Banner',
    title: 'Banner',
    type: 'insightBanner',
    },

    // Add Tags field
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
      description: 'Select tags associated with this Insight',
    },

    // Add Authors field
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
      description: 'Select authors associated with this Insight',
    },

    // Add Related Insights field
    {
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Service Text',
              type: 'string',
              description: 'The text for the related service',
            },
            {
              name: 'target',
              title: 'Service Target',
              type: 'url',
              description: 'The target URL for the related service',
            },
          ],
        },
      ],
      description: 'List of related insights with text and target',
    },
    
    {
      name: 'Content',
      type: 'array',
      title: 'Insight Content',
      of: [
        { type: 'reference', to: [
          
       
          { type: 'titleAndDescription' },
          { type: 'imageCard' },
          { type: 'podcast' },
          { type: 'Insight' },
          { type: 'videoCard' },
          { type: 'ContentCardSection' },
          { type: 'quoteSection' },
          { type: 'FeaturedInsightWithBG' },
          
      ] },
      ],
    },

    {
      name: 'RelatedInsights',
      title: 'Related Insights Grid',
      type: 'array',
      of: [
       
        {
          type: 'reference',
          to: [{ type: 'featuredSection' }],
        },
      ],
    },

    {
      name: 'CTA',
      title: 'CTA',
      type: 'reference',
      to: [{ type: 'CTA' }],
    },

    {
      name: 'Newsletter',
      title: 'Newsletter',
      type: 'reference',
      to: [{ type: 'Newsletter' }],
    },

  ],


  preview: {
   
    select: {
      customTitle: 'title',
    },
  
    prepare({customTitle}) {
      return {
        title: `Insight: ${customTitle}`, //  custom name
        
      };
    },
  },
}
