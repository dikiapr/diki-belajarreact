import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Tanaman from "./Tanaman";
import MainComp from "./MainComp";
import MawarComp from "./MawarComp";
import TulipComp from "./TulipComp";

const HeaderComp = () => {
  return (
    <div>
      <header>
        <div className="jumbotron">
          <h1 className="wercurry">Wercurry Garden</h1>
          <p className="paragsatu">Toko online yang menjual berbagai macam tanaman hias mulai dari Anggrek, Mawar, dan Tulip. Kami juga menjual peralatan-peralatan untuk berkebun.</p>
        </div>
        <nav>
          <ul className="ul-navbar">
            <li className="li-navbar">
              <Link to="/" className="a-navbar">
                Home
              </Link>
            </li>
            <li className="li-navbar">
              <Link to="/tanaman" className="a-navbar">
                Tanaman
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainComp />} />
          <Route path="/tanaman" element={<Tanaman />} />
          <Route path="/tanaman/mawar" element={<MawarComp />} />
          <Route path="/tanaman/tulip" element={<TulipComp />} />
        </Routes>
      </main>
    </div>
  );
};

export default HeaderComp;
