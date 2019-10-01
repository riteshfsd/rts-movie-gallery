import React, { Component, useEffect } from 'react';
import './movieDetails.css';
//import image1 from '../../assets/img-1.jpg';
import imageDisplay from '../../assets/img-1.jpg';
// import { connect } from 'react-redux';
// import { loadMovieList } from '../../actions/action';

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
          <div><button onClick={this.goBack}>Go Back</button></div>
          <img className="image-details-style" src={selectedMovieDetails.image} alt="movies details" />
        </div>
        <div className="movie-contents-section">
          details page section
        </div>
      </div>
    );
  }
}

export default MovieDetails;
