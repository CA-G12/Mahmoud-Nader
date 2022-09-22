import React, { Component } from "react";
import "./style.css";
class CardsComponents extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="imgDivAll">
        <img className="imgDiv" src={movie.large_cover_image} alt="" />
        <div className="overlay">
          <h3 className="h2Name">{movie.title}</h3>
          <br />
          <p className="p-movie-name">
            <span className="fa fa-star checked"></span>
            {movie.rating}
          </p>
          <a href={movie.url} target="_blank" rel="noreferrer">
            See Video
          </a>
        </div>
      </div>
    );
  }
}

export default CardsComponents;
