import React, {Component} from 'react';
import './App.css';
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
    if (!this.state.data) return <div>Loading...</div>;
    const { movies } = this.state.data;
    console.log(movies);
    console.log(this.state.data.movies);
    return (
      <>{movies.map((movie) => <div><p key={movie.id}>{movie.title}</p></div>)}</>
     );
  }
}


export default App;