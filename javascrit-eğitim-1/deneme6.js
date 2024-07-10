// let kullaniciA = {
//     "ad": "Ali",
//     "soyad": "Öztürk",
//     "yas": "23",
//     "adres":{
//         "sehir": "izmir",
//         "ilce": "torbalı",
//     },
//     "hobiler": ["sinema","spor"]

// }
// let kullaniciB = {
//     "ad": "Berfin",
//     "soyad": "Öztürk",
//     "yas": "13",
//     "adres":{
//         "sehir": "izmir",
//         "ilce": "torbalı",
//     },
//     "hobiler": ["sinema","spor"]

// }

// let sonuc = kullaniciA.ad;
// sonuc= kullaniciA.adres.sehir;
// sonuc=kullaniciA.hobiler[0];


// let kullanicilar = [
//     kullaniciA,
//     kullaniciB
// ]

// sonuc= kullanicilar[1].ad;

// console.log(sonuc);

 let siparis1={
    "sipariş id": 101,
    "sipariş tarihi":" 31.12.2022",
    "ödeme şekli": "kredi kartı",
    "kargo adresi":"kocaeli izmit",
    "urunler": [
        {
        "ürün_id":5,
        "ürün başligi": "Iphone 13 pro",
        "ürün ural":"http://abc.com/iphone-13-pro",
        "urun_fiyat": 22000
       },
       {
       "ürün_id":6,
        "ürün başligi": "Iphone 13 pro max",
        "ürün ural":"http://abc.com/iphone-13-pro",
        "urun_fiyat": 25000
       }


    ]

 }
 let siparis2={
    "sipariş id": 102,
    "sipariş tarihi":" 31.12.2022",
    "ödeme şekli": "kredi kartı",
    "kargo adresi":"kocaeli izmit",
    "urunler":[
       
       {
       "ürün_id":6,
        "ürün başligi": "Iphone 13 pro max",
        "ürün ural":"http://abc.com/iphone-13-pro",
        "urun_fiyat": 25000,
       }


    ],

 }

 let siparis1_toplam = (siparis1.urunler[0].urun_fiyat+ siparis1.urunler[1].urun_fiyat) *1.18;
 let siparis2_toplam = (siparis2.urunler[0].urun_fiyat ) *1.18;

let toplam = siparis1_toplam + siparis2_toplam;

console.log(siparis1_toplam);
console.log(siparis2_toplam);
console.log(toplam);
 
 let siparisler =[siparis1,siparis2];
