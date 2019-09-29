import React, {Component, useEffect} from 'react';
import './moviesList.css';
import image1 from '../../assets/img-1.jpg';
import { connect } from 'react-redux';
//import { loadMovieList } from '../../actions/action';

class MoviesList extends Component {
  componentDidMount () {
    this.props.getImageList();
  }
  render() {
    const data = this.props.movieList || [];
    let imageArray = [];
    data.forEach(element => {
      imageArray.push(<li className="listStyle"><img className="imageStyle" src={element.image} alt="test" /><div>{element.name}</div> </li>);
    });
    return (
      <div>
    <header className="App-header">Movies-Gallery-DeMo
      <ul className="mainlist">
        {imageArray}
      </ul>
    </header>
  </div>
    );
  }
}

export default MoviesList;
