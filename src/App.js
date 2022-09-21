import React, {Component} from 'react';
import './App.css';
import CardsComponents from './components/CardsComponents';
import Spinner from './components/Spinner';
import HeaderComponents from './components/HeaderComponent';
class App extends Component {
  state = { data: null, };
  
    componentDidMount() {
      fetch(`https://yts.mx/api/v2/list_movies.json?limit=32&page=2`)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error");
        return res;
      })
      .then((res) => res.json())
      .then(data => this.setState(data));
    
  }

  render() { 
    if (!this.state.data) return <Spinner />;
    const { movies } = this.state.data;
    // console.log(movies);
    // console.log(this.state.data.movies);
    return (
      <>
      <HeaderComponents/>
      <div className='cardsHeader' id = "movies"><h2>All Movies</h2></div>
      <div id = 'contanerAllCards'>
      {movies.map((movie) => <CardsComponents movie={movie}/>)}
      </div>
      </>
     );

  }
}


export default App;