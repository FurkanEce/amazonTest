Feature('First Test');

    
Scenario('test something', async ({ I, homePage, searchPage, addPage, deletePage}) => {


homePage.homePage();
searchPage.Search();
addPage.Add();
deletePage.Delete();




});