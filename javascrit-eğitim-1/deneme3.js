// let ad = "ali";
// let soyad= "öztürk";
// let yas = 67;
// let sehir= "izmir";

// let mesaj = "benim adım" + ad + 've soyadım' + soyad + '.' + sehir + "'de yaşıyorum."+ "Yaşım " + "" + yas + ".";
// console.log(mesaj);
 


// ternary  operetör
// let emeklilik = (65 - yas >0) ? "emekliliğe" + (65 - yas) +"kaldı" : "zaten emekli oldunuz";
// backtic kullanımı
// mesaj =  `benim adım ${ad} soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`;
// console.log(mesaj);
 
// let kursAdi = "Komple uygulamalı javascript eğitimi";

// let sonuc;

// sonuc = kursAdi.toLocaleLowerCase();
// sonuc = kursAdi.toUpperCase();
// sonuc= kursAdi.length;
// sonuc = kursAdi.slice(10);
// sonuc= kursAdi.substring(10);
// sonuc= kursAdi.replace("eğitimi", "kursu");
// sonuc=kursAdi.trim();
// sonuc= kursAdi.indexOf("Komple");
// sonuc=kursAdi.split("");


// console.log(sonuc);

let url = "https://www.sadikturan.com/";
let kursAdi= "komple web geliştirme kursu";

let sonuc;

sonuc= url.length;
sonuc=kursAdi.split(' ').length;
sonuc= url.startsWith("https");
if(sonuc){
    console.log("evet başlıyor");
}

if(kursAdi.indexOf("eğitimi") > -1){
    console.log("evet var");
}else{
    console.log("hayır yok");
}
kursAdi= kursAdi.toLocaleLowerCase();
kursAdi = kursAdi.replace("","-");
sonuc=`${url}/${kursAdi}`;
console.log(sonuc);