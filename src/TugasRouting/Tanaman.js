import React from "react";
import { Link } from "react-router-dom";
import anggrekbulan from "./gambar/anggrekbulan.jpg";
import anggrekdendrobium from "./gambar/anggrekdendrobium.jpg";
import anggrekcattleya from "./gambar/anggrekcattleya.jpg";
import FooterComp from "./FooterComp";

const Tanaman = () => {
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
            <p className="judulbunga">Anggrek Bulan</p>
            <img src={anggrekbulan} alt="anggrek_bulan" width="100%" max-height="300px" />
          </article>
          <article className="bunga">
            <p className="judulbunga">Anggrek Dendrobium</p>
            <img src={anggrekdendrobium} alt="anggrek_dendrobium" width="100%" max-height="300px" />
          </article>
          <article className="bunga">
            <p className="judulbunga">Anggrek Cattleya</p>
            <img src={anggrekcattleya} alt="anggrek_cattleya" width="100%" max-height="300px" />
          </article>
        </div>
      </main>
      <FooterComp />
    </div>
  );
};

export default Tanaman;
