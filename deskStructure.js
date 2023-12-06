// deskStructure.js


import {DocumentIcon} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Other items can be added outside the Pages folder if needed

      S.listItem()
        .title('Pages')
        .icon(() => '📄') // Adjust the icon as needed
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentListItem()
            
                .title('Home')
                .icon(() => '🏠')
                .schemaType('homePage'), // Adjust the schema type name
              S.documentListItem()
                .id('InsightsPage') // Use the document ID
                .title('Insights')
                .icon(() => '🔍')
                .schemaType('InsightsPage'), // Adjust the schema type name
              S.documentListItem()
                .id('servicesPage') // Use the document ID
                .icon(() => '🛠️')
                .title('Services')
                .schemaType('servicesPage'), // Adjust the schema type name
              S.documentListItem()
                .id('IndustriesPage') // Use the document ID
                .icon(() => '🏭')
                .title('Industries')
                .schemaType('IndustriesPage'), // Adjust the schema type name

                S.documentListItem()
                .id('AboutPage') // Use the document ID
                .icon(() => '🏢')
                .title('About Page')
                .schemaType('AboutPage'), // Adjust the schema type name

                S.documentListItem()
                .id('CareerPage') // Use the document ID
                .icon(() => '💼')
                .title('Careers Page')
                .schemaType('CareerPage'), // Adjust the schema type name

                S.documentListItem()
                .id('CareWhoWeArePageerPage') // Use the document ID
                .icon(() => '🤝')
                .title('Who We Are Page')
                .schemaType('WhoWeArePage'), // Adjust the schema type name 
                
            ])
        ),


         // Tags Section
      S.listItem()
      .title('Tags')
      .icon(() => '🏷️') // Adjust the icon as needed
      .schemaType('tag')
      .child(
        S.documentTypeList('tag')
          .title('Tags')
          .child(documentId =>
            S.document()
              .documentId(documentId)
              .schemaType('tag')
          )
      ),

    // Industry Section
    S.listItem()
      .title('Industry')
      .icon(() => '🏭') // Adjust the icon as needed
      .schemaType('Industry')
      .child(
        S.documentTypeList('Industry')
          .title('Industries')
          .child(documentId =>
            S.document()
              .documentId(documentId)
              .schemaType('Industry')
          )
      ),

    // Newsletter Section
    S.listItem()
      .title('Newsletter')
      .icon(() => '✉️') // Adjust the icon as needed
      .schemaType('Newsletter')
      .child(
        S.documentTypeList('Newsletter')
          .title('Newsletters')
          .child(documentId =>
            S.document()
              .documentId(documentId)
              .schemaType('Newsletter')
          )
      ),

       // Insights Section
       S.listItem()
       .title('Insights')
       .icon(() => '🔍') // Adjust the icon as needed
       .child(
         S.documentTypeList('Insight')
           .title('Insights')
           .child(documentId =>
             S.document()
               .documentId(documentId)
               .schemaType('Insight')
           )
       ),

     // Call To Action Section
     S.listItem()
       .title('Call To Action')
       .icon(() => '🚀') // Adjust the icon as needed
       .child(
         S.documentTypeList('CTA')
           .title('Call To Action')
           .child(documentId =>
             S.document()
               .documentId(documentId)
               .schemaType('CTA')
           )
       ),


       S.listItem()
        .title('Mega Menus')
        .icon(() => '📋') // Adjust the icon as needed
        .child(
          S.list()
            .title('Menus')
            .items([
              S.documentListItem()
            
                .title('Insights Menu')
                .id('InsightsMegaMenu')
                .schemaType('InsightsMegaMenu'), // Adjust the schema type name

              S.documentListItem()
                .id('ServicesMegaMenu') // Use the document ID
                .title('Services Menu')
                .schemaType('ServicesMegaMenu'), // Adjust the schema type name

              S.documentListItem()
                .id('IndustryMegaMenu') // Use the document ID
                
                .title('Industry Menu')
                .schemaType('IndustryMegaMenu'), // Adjust the schema type name

              S.documentListItem()
                .id('AboutMegaMenu') // Use the document ID
              
                .title('About Menu')
                .schemaType('AboutMegaMenu'), // Adjust the schema type name

                S.documentListItem()
                .id('CareerMegaMenu') // Use the document ID
                
                .title('Career Menu')
                .schemaType('CareerMegaMenu'), // Adjust the schema type name
                
            ])
        ),





      //  S.listItem()
      //  .title('Quote Sections')
      //  .icon(() => '📜') // Adjust the icon as needed
      //  .child(
      //    S.documentTypeList('quoteSection')
      //      .title('Quote Sections')
      //      .child(documentId =>
      //        S.document()
      //          .documentId(documentId)
      //          .schemaType('quoteSection')
      //      )
      //  ),

      //  S.listItem()
      //  .title('Content Section')
      //  .icon(() => '📄') 
      //  .child(
      //    S.documentTypeList('contentSection')
      //      .title('contentSection')
      //      .child(documentId =>
      //        S.document()
      //          .documentId(documentId)
      //          .schemaType('contentSection')
      //      )
      //  ),
    
      //  S.listItem()
      //  .title('Featured Sections')
      //  .icon(() => '🌟') 
      //  .child(
      //    S.documentTypeList('featuredSection')
      //      .title('Featured Insights')
      //      .child(documentId =>
      //        S.document()
      //          .documentId(documentId)
      //          .schemaType('featuredSection')
      //      )
      //  ),
    

    ]);

export default myStructure;
