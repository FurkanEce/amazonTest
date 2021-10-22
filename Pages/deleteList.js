
const { I } = inject();

module.exports = {
  fields:{},
  select:{},
  buttons:{
    deleteButton:"[name='submit.deleteItem']"
  },

  // Anasayfaya gitme 

  Delete:function(){

    I.wait(10);
    I.waitForElement(this.buttons.deleteButton);
    I.click(this.buttons.deleteButton);
    I.wait(20);
  }
}