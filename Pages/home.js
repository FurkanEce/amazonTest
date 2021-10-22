const { I } = inject();

module.exports = {
  fields:{
      emailField:"input[id='ap_email']",
      passwordField:"[id='ap_password']"
  },
  select:{},
  buttons:{
    signInButton:"span[class='nav-line-2 ']", //dinamik hale getiriyoruz.
    continueButton:"input[id='continue']",
    loginButton:"[id='signInSubmit']"
  },

  // Anasayfaya gitme 

  homePage:function(){
    //siteye gidiş
    I.amOnPage("https://www.amazon.com/");
    I.waitForElement(this.buttons.signInButton);           //Bu Fonksiyon İlgili Butonun veya Field'ın yüklenmesini beklemeye yaramaktadır.
    I.click(this.buttons.signInButton);
    I.waitForElement(this.fields.emailField);
    I.fillField(this.fields.emailField,'furkanece99@gmail.com');
    I.waitForElement(this.buttons.continueButton);
    I.click(this.buttons.continueButton);
    I.waitForElement(this.fields.passwordField);
    I.fillField(this.fields.passwordField, secret('Pinar123.'));
    I.waitForElement(this.buttons.loginButton);
    I.click(this.buttons.loginButton);

 }
}