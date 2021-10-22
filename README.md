### AmazonTest
  Projede Codeceptjs kullanılmıştır.

### Proje Nasıl Çalıştırılır?
  İlk olarak terminale **npx selenium start** yazılır.
  Daha sonra farklı bir terminal açılarak ona da **npx codeceptjs run** yazılarak test başlatılabilir.
  
### Test Senaryosu
  amazon.com sayfasını aç ,
  Siteye Log-in ol ,
  Anasayfa 'ya girdiğin **Limitless** ismiyle arama yap ,
  **Limitless** isimlli kitabı seç ,
  Kitabı alışveriş listesine ekle , 
  Alışveriş listesi sayfasına git ,
  Eklediğin kitabı alışveriş listesinden sil.
  
### Sayfalar
  **addList.js**
  **deleteList.js**
  **home.js**
  **search.js**
  
### Fonksiyonlar
  **bookButton** : Kitabın üstüne tıklama
  **addListButton** : Kitabı alışveriş listesine ekleme
  **shoppingListButton** : Alışveriş Listesine gitme
  **deleteButton** : Alışveriş listesinden kitabı silme
  **signInButton** : Giriş yap butonuna tıklama
  **continueButton** : Email girildikten sonra devam butonuna tıklama
  **loginButton** : Şifreyi girdikten sonra giriş yap butonuna tıklama
  **emailField** : E-posta girme
  **passwordField** : Şifre girme
  **searchIndex** : Ürün arama 
  **searchButton** : Ürün aram butonuna tıklama
