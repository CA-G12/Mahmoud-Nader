import React, { Component } from "react";
import "./App.css";
import CardsComponents from "./components/CardsComponents";
import SearchBar from "./components/SearchBar";
import Spinner from "./components/Spinner";
import HeaderComponents from "./components/HeaderComponent";
class App extends Component {
  state = {
    data: null,
    searchWord: "",
    filteredData: null, 
  };

  componentDidMount() {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=32&page=2`)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error");
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ...this.state, data, filteredData: data.data.movies });
      });
  }

  handleSearch = (word) => {
    const searchWord = word;
    this.setState({ ...this.state, searchWord });
    const arr = this.state.data.data.movies;
    let filteredData = arr.filter((movie) => {
      return movie.title.toLowerCase().includes(searchWord);
    });

    this.setState({ ...this.state, filteredData });

    if (!filteredData.length || searchWord === "") {
      const { movies } = this.state.data.data;
      this.setState({ ...this.state, filteredData: movies });
    }
  };

  render() {
    if (!this.state.data) return <Spinner />;
    const filteredData = this.state.filteredData.sort((a,b) => (a.rating < b.rating ) ? 1 : ((b.rating  < a.rating ) ? -1 : 0));


    return (
      <>
        <HeaderComponents />
        <div className="cardsHeader" id="movies">
          <h2>All Movies</h2>
        </div>
        <SearchBar onSearch={this.handleSearch} />
        <div id="containerAllCards">
          {filteredData.map((movie) => (
            <CardsComponents key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
