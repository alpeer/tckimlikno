# TC Kimlik Doğrulayıcı

`TC Kimlik Numarası` doğrulama Node JS kütüphanesi

- TypeScript desteği
- Küçük boyutlu
- [Bent](https://github.com/mikeal/bent) kullanır

```bash
  npm i tckimlikno --save
```

```javascript
import dogrula from "tckimlikno"
// kendi bilgilerinizi girerek test edin
const sonuç = await dogrula({
  ad: "",
  soyad: "",
  tc: 1,
  dogum_yili: 1,
});

console.log(sonuç ? "Geçerli": "Geçersiz")
```

```javascript
const dogrula = require("tckimlikno")
// kendi bilgilerinizi girerek test edin
dogrula({
  ad: "",
  soyad: "",
  tc: 1,
  dogum_yili: 1,
})
  .then(sonuç => 
    console.log(sonuç ? "Geçerli": "Geçersiz"))


```

Gelecekte [KPS Servis URL](https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL)'i değişirse kodu değiştirmeden environment değişkeniyle çözebilirsiniz. `TCKIMLIK_URL=yeni_servis_urli`
