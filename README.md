### AmazonTest

 **.** Projede Codeceptjs kullanılmıştır.
  
### Proje Nasıl Çalıştırılır?

 **.** İlk olarak terminale **npx selenium start** yazılır.<br/>
 **.** Daha sonra farklı bir terminal açılarak ona da **npx codeceptjs run** yazılarak test başlatılabilir.
  
### Test Senaryosu

 **-** amazon.com sayfasını aç ,<br/>
 **-** Siteye Log-in ol ,<br/>
 **-** Anasayfa 'ya girdiğin **Limitless** ismiyle arama yap ,<br/>
 **-** **Limitless** isimli kitabı seç ,<br/>
 **-** Kitabı alışveriş listesine ekle , <br/>
 **-** Alışveriş listesi sayfasına git ,<br/>
 **-** Eklediğin kitabı alışveriş listesinden sil.
  
### Sayfalar

  **.** **addList.js**<br/>
  **.** **deleteList.js**<br/>
  **.** **home.js**<br/>
  **.** **search.js**<br/>
  
### Fonksiyonlar

  **-** **bookButton** : Kitabın üstüne tıklama<br/>
  **-** **addListButton** : Kitabı alışveriş listesine ekleme<br/>
  **-** **shoppingListButton** : Alışveriş Listesine gitme<br/>
  **-** **deleteButton** : Alışveriş listesinden kitabı silme<br/>
  **-** **signInButton** : Giriş yap butonuna tıklama<br/>
  **-** **continueButton** : Email girildikten sonra devam butonuna tıklama<br/>
  **-** **loginButton** : Şifreyi girdikten sonra giriş yap butonuna tıklama<br/>
  **-** **emailField** : E-posta girme<br/>
  **-** **passwordField** : Şifre girme<br/>
  **-** **searchIndex** : Ürün arama <br/>
  **-** **searchButton** : Ürün aram butonuna tıklama<br/>
