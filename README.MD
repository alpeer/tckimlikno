# TC Kimlik Doğrulayıcı

`TC Kimlik Numarası` doğrulama Node JS kütüphanesi

[![NodeJS][nodejs-image]][npm-url]
[![npm][npm-image]][npm-url]
[![size][size-image]][npm-url]
[![license mit][license-image]][github-url]
![vulnerabilities][vulnerabilities-image]

- TypeScript desteği
- Küçük boyutlu
- [Bent][bent-url] kullanır

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

Gelecekte [KPS Servis URL][kps-url]'i değişirse kodu değiştirmeden environment değişkeniyle çözebilirsiniz. `TCKIMLIK_URL=yeni_servis_urli`

[license-image]: https://img.shields.io/github/license/alpeer/tckimlikno?style=flat-square
[size-image]: https://img.shields.io/bundlephobia/minzip/tckimlikno?style=flat-square
[nodejs-image]: https://img.shields.io/badge/library-NodeJS-darkgreen.svg?style=flat-square
[npm-image]: https://img.shields.io/npm/v/tckimlikno.svg?style=flat-square
[vulnerabilities-image]: https://img.shields.io/snyk/vulnerabilities/npm/tckimlikno

[npm-url]: https://npmjs.org/package/tckimlikno
[github-url]: https://github.com/alpeer/tckimlikno
[bent-url]: https://github.com/mikeal/bent
[kps-url]: https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL
