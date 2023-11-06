class MigrosBase{

    indirimOrani = 20;
    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;

    }



    hesapla() {

        let odenecekTutar = 0;
        if (this.urunleriKontrolEt(urunler)) {
            // Sepet dolu.
            this.urunler.forEach(urun => {
                odenecekTutar += urun.urunFiyat;
            });
        }
        else {
            alert("En az 1 tane ürün satın almalısınız.")
        }


        if (this.kartVarmi) {
            odenecekTutar -= odenecekTutar * (this.indirimOrani / 100);
        }

        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }
}