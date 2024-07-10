// let ogrenciler = [ "ali", "ada","çınar"];
//  sonuc= ogrenciler.length;

//   array to string
//  sonuc= ogrenciler.toString();
//  sonuc = ogrenciler.join(" ");
 // eleman silme

//  sonuc=ogrenciler.pop(); // son eleman silinir ve son eleman geri döndürülür
//  sonuc=ogrenciler.shift(); // ilk eleman silinir ve ilk eleman geri döndürülür

//eleman ekleme

//sonuc=ogrenciler.push("sena"); //sonuna ekler
//sonuc=ogrenciler.unshift("sena");// basına ekler

// let markalar1 =["opel", "renault"];
// let markalar2 =["mercedes", "bmw"];
// let markalar3 =["tesla", "ford"];

//sonuc= markalar1.concat(markalar2); // concat ile 2 diziyi birleştirdik


//sonuc= markalar1.splice(0, 0, markalar2);
//sonuc= markalar1.splice(0, 0, "mercedes");
// sonuc= markalar1.splice(0, 1);
//  console.log(sonuc);
// console.log(markalar1);

let meyveler= ["Elma","Armut", "Muz","Çilek"];

sonuc=meyveler.length;
sonuc=meyveler.push("Kiraz");

sonuc= meyveler.splice( meyveler.length-2, 2);
//console.log(sonuc);
console.log(meyveler);
 
// console.log(meyveler[0]);
// console.log(meyveler[meyveler.length - 1 ]);
// console.log(meyveler.includes("Elma"));

let ogr1 = [
    "yiğit",
     "bilgi",
     2010, 
     [70,60,80]
    ]
let ogr2 = [
        "ada",
         "bilgi",
         2012, 
         [80,80,90]
        ]


let ogr3 = [
            "ahmet",
             "turan",
             2009, 
             [60,60,70]
            ]

let ogrenciler = [ogr1,ogr2,ogr3];

let yigit_yas = new Date().getFullYear()-ogrenciler[0][2];
let ada_yas = new Date().getFullYear()-ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear()-ogrenciler[2][2];
console.log(yigit_yas, ada_yas, ahmet_yas);

let yigit_not = ogrenciler[0][3][0]+ ogrenciler[0][3][1] + ogrenciler[0][3][2];
let ada_not = ogrenciler[1][3][0]+ ogrenciler[1][3][1] + ogrenciler[1][3][2];
let ahmet_not = ogrenciler[2][3][0]+ ogrenciler[2][3][1] + ogrenciler[2][3][2];
console.log(yigit_not,ada_not,ahmet_not);