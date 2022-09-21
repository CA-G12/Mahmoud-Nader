import React, { Component } from "react";
import "./style.css";
class CardsComponents extends Component {
  render() {
    const { movie } = this.props;
    return (
          <div className="card">
            <img className="img-card" src={movie.large_cover_image} alt=""/>
            <div className="details">
              <p className="p-movie-name">{movie.title}</p>
              <p className="p-movie-name"><span class="fa fa-star checked"></span>{movie.rating}</p>
            </div>
            <a className="button" href={movie.url} target="_blank" rel="noreferrer" >More</a>
          </div>
    );
  }
}

export default CardsComponents;


