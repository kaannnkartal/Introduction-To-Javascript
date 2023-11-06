

let mesaj =
    `
Migros'a hoşgeldiniz.
Money Kartınız var mı?
1- Evet
2- Hayır
`;



let urunler = [
    {
        urunIsmi: "Süt",
        urunFiyat: 15
    },
    {
        urunIsmi: "Bebek Bezi",
        urunFiyat:100
    },
    {
        urunIsmi: "Kusbası",
        urunFiyat : 220
    }
]




// True veya false
let sonuc = confirm(mesaj);

if (sonuc) {
    // Money kartı vardır.

    let isim = prompt("Adınız :");
    let soyisim = prompt("Soyadınız:")


    const musteri = new Musteri(isim,soyisim,sonuc,urunler);

    let odenecekTutar = musteri.hesapla();

    alert(
        `Müsteri Bilgileri : ${isim} ${soyisim}
         Odenecek Tutar : ${odenecekTutar}
        `);
} else {
    const musteri = new Musteri(null, null, sonuc, urunler);

    let odenecekTutar = musteri.hesapla();
    alert(`Odenecek Tutar : ${odenecekTutar}`)
}



// function showIntroMsg(mesaj) {  
//     confirm(mesaj);
// }

// document.addEventListener("DOMContentLoaded", showIntroMsg(mesaj))