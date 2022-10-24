import React from "react";
import { Link } from "react-router-dom";
import tulippink from "./gambar/tulippink.jpg";
import tulipkuning from "./gambar/tulipkuning.jpg";
import tuliporange from "./gambar/tuliporange.jpg";
import FooterComp from "./FooterComp";

const TulipComp = () => {
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
            <p className="judulbunga">Tulip Pink</p>
            <img src={tulippink} alt="tulip_pink" width="100%" max-height="100px" />
          </article>
          <article className="bunga">
            <p className="judulbunga">Tulip Kuning</p>
            <img src={tulipkuning} alt="tulip_kuning" width="100%" max-height="300px" />
          </article>
          <article className="bunga">
            <p className="judulbunga">Tulip Orange</p>
            <img src={tuliporange} alt="tulip_orange" width="100%" max-height="300px" />
          </article>
        </div>
      </main>
      <FooterComp />
    </div>
  );
};

export default TulipComp;
