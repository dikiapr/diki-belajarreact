import React, { useEffect, useState } from "react";
import Navigasi from "./TugasHook/Navigasi";
import SearchBar from "./TugasHook/SearchBar";
import TopBerita from "./TugasHook/TopBerita";

const FEATURED_API = "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=56f0e8dece7d434184b9489408306644";

const SEARCH_API = "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=56f0e8dece7d434184b9489408306644&q=";

const App = () => {
  const [topBerita, setTopBerita] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getBerita(FEATURED_API);
  }, []);

  const getBerita = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTopBerita(data.articles);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getBerita(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Navigasi />
      <SearchBar handleOnSubmit={handleOnSubmit} searchTerm={searchTerm} handleOnChange={handleOnChange} />
      <div className="berita-container">{topBerita && topBerita.map((news) => <TopBerita key={news.publishedAt} {...news} />)}</div>;
    </>
  );
};

export default App;
