const { I } = inject();

module.exports = {
  fields:{
        searchIndex:"[id='twotabsearchtextbox']"
  },
  select:{},
  buttons:{
        searchButton:"[id='nav-search-submit-button']"
  },

  Search:function(){
    
    I.fillField(this.fields.searchIndex, 'Limitless');
    I.click(this.buttons.searchButton);
    
    
 } 
}