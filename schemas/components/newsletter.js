export default {
    name: 'Newsletter',
    title: 'Newsletter',
    type: 'document',
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

    preview: {
   
      select: {
        customTitle: 'formTitle',
      },
    
      prepare({customTitle}) {
        return {
          title: `Newsletter Section: ${customTitle}`, //  custom name
          
        };
      },
    },
  }
  