import React from "react";
import Navigasi from "./TugasClassComp/Navigasi";
import axios from "axios";
import TopBerita from "./TugasClassComp/TopBerita";
import SearchBar from "./TugasClassComp/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topBerita: [],
      searchTerm: "",
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=56f0e8dece7d434184b9489408306644&q=`)
      .then((res) => {
        const topBerita = res.data.articles;
        this.setState({ topBerita });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchTerm) {
      axios
        .get(`https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=56f0e8dece7d434184b9489408306644&q=` + this.state.searchTerm)
        .then((res) => {
          const topBerita = res.data.articles;
          this.setState({ topBerita });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleOnChange = (e) => {
    this.setState(() => {
      return {
        searchTerm: e.target.value,
      };
    });
  };
  render() {
    const { topBerita } = this.state;
    return (
      <>
        <Navigasi />
        <SearchBar handleOnSubmit={this.handleOnSubmit} searchTerm={this.searchTerm} handleOnChange={this.handleOnChange} />
        <div className="berita-container">{topBerita && topBerita.map((news) => <TopBerita key={news.publishedAt} {...news} />)}</div>;
      </>
    );
  }
}

export default App;
