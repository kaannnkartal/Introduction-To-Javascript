/*

1- Javasciprt senkron calısan bir programlama dilidir.
Senkron : İş 1 başlar- süre1 gecer - is1 biter, İs2 baslar- süre2 gecer - is2.biter
Toplam calısma süresi süre1 + süre2dir. 
Processler bir bir calıstırılır.

Javasciprt bazı durumlarda asenkron calısır
1* Timing
2* Event
3* Http isteklerinde. WebAPI Services.

*/


// console.log(1);
// console.log(2);
// console.log("Kaan");




console.log("Kaan");   // id = 1

setTimeout(() => {  // id = 2
    console.log("Süre doldu ve calıstı")
}, 1000);

setTimeout(() => { // id = 3
    console.log("500MS de bekledi ve calıstı")
}, 500);


console.log("Kartal"); // id = 4


//! Timeout fonksiyonları asenkron olduğu icin bir islem yürütülmeye baslandığında bitmesi gerekmiyor.
//! Yani kod yukarıdan asagıya derlenmis olsa bile id sırasına gore 1 , 2 , 3 , 4 diye gitmesi gerekirdi eğer senkron olsalardı.
//! Fakat timing fonksiyonları asenkron olduğu icin 1-4-3-2 olarak cıktı vermis oldular.

//! Kısaca asenkron calısma yapısında bir is bitmeden aynı anda birden fazla is calıstırılmıs olur.


//! Senkron calısanlar asenkron calısanları beklemez direkt calısırlar.
//! Senkron islemler bittikten sonra asenkron islemler at yarısı cizgisinden aynı anda start verirler.

