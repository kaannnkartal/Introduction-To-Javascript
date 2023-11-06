// OOP Giris


class Insan{
    constructor(isim,soyisim,yas,maas) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }


    bilgileriGoster() {
        console.log(`
        İsim : ${this.isim}
        Soyisim : ${this.soyisim}
        Yas : ${this.yas}
        Maas : ${this.maas}`)
    }
}


const insan1 = new Insan("Kaan","Kartal",23,10000);

insan1.bilgileriGoster();
