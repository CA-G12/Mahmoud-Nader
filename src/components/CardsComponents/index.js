import React, { Component } from "react";
import "./style.css";
class CardsComponents extends Component {
  render() {
    const { movie } = this.props;
    return (
      // <div className="card">
      //   <img className="img-card" src={movie.large_cover_image} alt=""/>
      //   <div className="details">
      //     <p className="p-movie-name">{movie.title}</p>
      //     <p className="p-movie-name"><span class="fa fa-star checked"></span>{movie.rating}</p>
      //   </div>
      //   <a className="button" href={movie.url} target="_blank" rel="noreferrer" >More</a>
      // </div>
      <div className="imgDivAll">
        <img className="imgDiv" src={movie.large_cover_image} alt = "" />
        <div className="overlay">
          <h3 className="h2Name">{movie.title}</h3>
          <a href={movie.url} target="_blank" rel="noreferrer" >
            See Video
          </a>
        </div>
      </div>
    );
  }
}

export default CardsComponents;
