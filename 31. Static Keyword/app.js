// ! Static nedir?
// ! Nesne üretmeden sınıf üzerinden erisilebilmeyi sağlayan keyword.

// ! Static değil ise sadece nesne üzerinden, static ise sadece class üzerinden erisebilirsin.
// ! Static tanımladığın bir şeyi nesne üzerinden erisemezsin.!


class Matematik{



    topla(a, b){
        console.log(a + b);
    }

    static cikar(a, b){
        console.log(a - b);
    }

    carp(a, b){
        console.log(a * b);
    }
    
    bol(a, b){
        console.log(a / b);
    }
}


const m1 = new Matematik();

m1.topla(2, 5);

Matematik.cikar(10, 5);