import React, { Component, useEffect } from 'react';
import './movieDetails.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class MovieDetails extends Component {
  componentDidMount() {
    // this.props.getImageList();

  }
  goBack = prop => {
    console.log("See Movie details Page ++++++");
    this.props.history.push('/');
  }
  render() {
    const selectedMovieDetails =  this.props.location.state;
    return (
      <div className="movie-details-container">
        <div className="movie-logo-section">
          <div><button onClick={this.goBack} className="go-back-btn"> <ArrowBackIcon /></button></div>
          <img className="image-details-style" src={selectedMovieDetails.image} alt="movies details" />
        </div>
        <div className="movie-contents-section">
          <div className="movie-contents-section-div">
          <h1 className="movie-details-heading">Movie Details</h1>
          <div className="div-for-hor-line"></div>
          <div className="root-container">
              <div className="parent-1">
                <div className = "child-1">Name : </div>
                <div className = "child-11">{selectedMovieDetails.name}</div>
              </div>
              <hr/>
              <div className="parent-1">
                <div className = "child-1">productionYear : </div>
                <div className = "child-11">{selectedMovieDetails.productionYear}</div>
              </div>
              <hr/>
              <div className="parent-1">
                <div className = "child-1">Genre: </div>
                <div className = "child-11">{selectedMovieDetails.genre}</div>
              </div>
              <hr/>
              <div className="parent-1">
                <div className = "child-1">synopsisShort: </div>
                <div className = "child-11">{selectedMovieDetails.synopsisShort}</div>
              </div>
              <hr/>
              <div className="parent-1-1">
                <button className = "book-movie-button">Book Movie</button>
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
