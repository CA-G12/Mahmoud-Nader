import React, { Component } from "react";
import "./App.css";
import CardsComponents from "./components/CardsComponents";
import SearchBar from "./components/SearchBar";
import Spinner from "./components/Spinner";
import HeaderComponents from "./components/HeaderComponent";
class App extends Component {
  state = { data: null };

  componentDidMount() {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=32&page=2`)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error");
        return res;
      })
      .then((res) => res.json())
      .then((data) => this.setState(data));
  }

  handleSearch = (event) => {
    console.log(event);
    const searchWord = event;
    // this.setState({ ...this.state, searchWord });
    // const arr = this.state.filteredData;

    // let filteredData = arr.filter((movie) => {
    //   return movie.title.toLowerCase().includes(searchWord);
    // });

    // this.setState({ ...this.state, filteredData });


    // if(!filteredData.length || searchWord === '') {
    //   this.setState({ ...this.state, filteredData: this.state.data.data.movies });
    //   this.state.filteredData = this.state.data.data.movies;
    // }
  };


  render() {
    if (!this.state.data) return <Spinner />;
    const { movies } = this.state.data;
    // console.log(movies);
    // console.log(this.state.data.movies);
    return (
      <>
        <HeaderComponents />
        <div className="cardsHeader" id="movies">
          <h2>All Movies</h2>
        </div>
        <SearchBar onSearch={this.handleSearch}/>
        <div id="contanerAllCards">
          {movies.map((movie) => (
            <CardsComponents movie={movie} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
