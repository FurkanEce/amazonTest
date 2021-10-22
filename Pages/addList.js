
const { I } = inject();

module.exports = {
  fields:{},
  select:{},
  buttons:{
    bookButton:"[src='https://m.media-amazon.com/images/I/81sfL78P3EL._AC_UY218_.jpg']",
    addListButton:"[id='add-to-wishlist-button-submit']",
    shoppingListButton:"[id='WLHUC_result_listName']"
  },

  // Anasayfaya gitme 

  Add:function(){

    I.scrollPageToBottom();
    I.click(this.buttons.bookButton);
    I.waitForElement(this.buttons.addListButton);
    I.click(this.buttons.addListButton);
    I.click(this.buttons.shoppingListButton);

  }
}