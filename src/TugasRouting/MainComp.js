import React from "react";
import mainpic from "./gambar/mainpic.jpg";
import kontakpic from "./gambar/kontakpic.jpg";
import FooterComp from "./FooterComp";

const MainComp = () => {
  return (
    <div>
      <main className="container-main">
        <article className="artikelhome">
          <img src={mainpic} width="100%" height="500px" alt="Main_Picture" />
          <p className="tekshome">
            Tanaman hias mencakup semua tumbuhan, baik berbentuk terna, merambat, semak, perdu, ataupun pohon, yang sengaja ditanam orang sebagai komponen taman, kebun rumah, penghias ruangan, upacara, komponen riasan/busana, atau sebagai
            komponen karangan bunga. Bunga potong pun dapat dimasukkan sebagai tanaman hias. Dalam konteks umum, tanaman hias adalah salah satu dari pengelompokan berdasarkan fungsi dari tanaman hortikultura. Bagian yang dimanfaatkan tidak
            semata bunga, tetapi kesan keindahan yang dimunculkan oleh tanaman ini. Selain bunga (warna dan aroma), daun, buah, batang, bahkan pepagan dapat menjadi komponen yang dimanfaatkan. Sebagai contoh, beberapa ranting tumbuhan yang
            mengeluarkan aroma segar dapat diletakkan di ruangan untuk mengharumkan ruangan dapat menjadikannya sebagai tanaman hias, salah satunya adalah kaktus. Kaktus dapat tumbuh pada waktu yang lama tanpa air. Kaktus biasa ditemukan di
            daerah-daerah yang kering. Kata jamak untuk kaktus adalah kakti. Kaktus memiliki akar yang panjang untuk mencari air dan memperlebar penyerapan air dalam tanah. Air yang diserap kaktus disimpan dalam ruang di batangnya.
          </p>
        </article>
        <aside className="asidehome">
          <article>
            <h4>BUY NOW!!!</h4>
            <img src={kontakpic} width="75%" height="180px" alt="Kontak" />
            <p className="tekskontak">Untuk pemesanan hubungi: </p>
            <p>No.Telp/Wa: 082-XXX-XXXX </p>
          </article>
        </aside>
      </main>
      <FooterComp />
    </div>
  );
};

export default MainComp;
