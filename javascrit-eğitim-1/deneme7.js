// toplam =0;
// for(i=1 ; i<=10; i++){
//     toplam +=i;

// }
// console.log(toplam);

// let sayilar = [1,2,3,4,8,6];

// toplam = 0;
// for(let i=0; i<sayilar.length; i++){ 
//     toplam+=sayilar[i]; 
// }

// for(i in sayilar){
//     toplam+=sayilar[i];
// }
// console.log(toplam);

// let user ={
//     "name":"Ali",
//     "username": "aliozturk",
//     "password":"123456",
//     "email":"alicanulasozturk@gmail.com"
// }

// for (let key in user){
//     console.log(user[key]);
// }

let sayilar =[1,5,7,15,3,25];

// for(i in sayilar){
//     console.log(sayilar[i]*sayilar[i]);
// }

// for(i in sayilar){
//     if (sayilar[i]%5 == 0 ){
//         console.log(sayilar[i]);
//     }
// }
// toplam = 0 ;
// for(i in sayilar){
//     if (sayilar[i]%2 == 1 ){
//        toplam+=sayilar[i];
        
//     }
   
// }
// console.log(toplam);

let urunler =["iphone 12", "iphone 13","iphone 14","samsung s23"];

// for (i in urunler){
//     console.log(urunler[i].toUpperCase());
// }

// adet = 0 ;
// for (urun of urunler){
//     if(urun.includes("samsung")){
//         adet++;
//     }
// }
// console.log(adet);
let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];

for(ogrenci of ogrenciler){
    let not_toplam = 0;
    let ortlama =0;
    let adet = 0 ;
    for( not of ogrenci.notlar){
       not_toplam+=not;
       adet++;
    }
    ortlama = not_toplam/adet;
    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencini ortlaması:${ortlama}. `);
    if(ortlama>= 50){
        console.log("başarılı");
    }else{
        console.log("başarısız.")
    }
}

