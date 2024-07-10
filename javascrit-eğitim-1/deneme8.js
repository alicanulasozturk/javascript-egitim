// function yasHesapla(dogumYili){
//     return new Date().getFullYear()- dogumYili;
// }

// function emekliligeKacYilKaldi( dogumYili, isim){
//     let yas = yasHesapla(dogumYili);
//     let kalanSene = 65- yas;
//     if (kalanSene>0){
//         console.log(`sayın ${isim}, emekliliğinize ${kalanSene} sene vardır.`)
    
//     }else{
//         console.log("zaten emekli oldunuz");
//     }
// }
// emekliligeKacYilKaldi(2001," ali"); 

// function kelimeYazdir(kelime , adet){
//     for (i =0 ; i< adet ;i++){
//         console.log(kelime);
//     }
// }
// kelimeYazdir("ali", 3);

// function diktortgen(uzunKenar, kisaKenar){
//     let cevreHesapla = 2*uzunKenar + 2*kisaKenar ;
//     let alanHesapla = uzunKenar * kisaKenar;
//     console.log(cevreHesapla,alanHesapla);
// }
// diktortgen(5,4);

// function yaziTura(onYuz, arkaYuz){
//     let random = Math.random();

//     if (random < 0.5){
//         console.log("yazı");
//     }else{
//         console.log("tura");
//     }
//     console.log(random);
// }
// yaziTura();

// function bolen(sayi){
//     let sayilar =[];
//     for(let i=2; i<sayi ;i++){
//         if(sayi % i ==0){
//             sayilar.push(i);
//         }
//     }
//     return sayilar;
// }
// console.log(bolen(50));

// function topla(){
//     let sonuc=0;

//     for(let i=0;i < arguments.length ;i++){
//         sonuc+=arguments[i];
//     }
//     return sonuc;
// }
// console.log(topla( 5,4,70,10));