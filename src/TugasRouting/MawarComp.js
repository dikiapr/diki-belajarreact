import React from "react";
import { Link } from "react-router-dom";
import mawarmerah from "./gambar/mawarmerah.jpg";
import mawarputih from "./gambar/mawarputih.jpg";
import mawarorange from "./gambar/mawarorange.jpg";
import FooterComp from "./FooterComp";

const MawarComp = () => {
  return (
    <div>
      <main className="container-main-tanaman">
        <aside className="asidetanaman">
          <article>
            <h4>Top 3 Tanaman Hias 2022</h4>
            <ul>
              <li className="li-tanaman">
                <Link to="/tanaman" className="tekssidebar">
                  Anggrek
                </Link>
              </li>
              <li className="li-tanaman">
                <Link to="/tanaman/mawar" className="tekssidebar">
                  Mawar
                </Link>
              </li>
              <li className="li-tanaman">
                <Link to="/tanaman/tulip" className="tekssidebar">
                  Tulip
                </Link>
              </li>
            </ul>
          </article>
        </aside>
        <div className="semuaArtikel">
          <article className="bunga">
            <p className="judulbunga">Mawar Merah</p>
            <img src={mawarmerah} alt="mawar_merah" width="100%" max-height="100px" />
          </article>
          <article className="bunga">
            <p className="judulbunga">Mawar Putih</p>
            <img src={mawarputih} alt="mawar_putih" width="100%" max-height="300px" />
          </article>
          <article className="bunga">
            <p className="judulbunga">Mawar Orange</p>
            <img src={mawarorange} alt="mawar_orange" width="100%" max-height="300px" />
          </article>
        </div>
      </main>
      <FooterComp />
    </div>
  );
};

export default MawarComp;
