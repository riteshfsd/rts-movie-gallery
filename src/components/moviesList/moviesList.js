import React, {useEffect} from 'react';
import './moviesList.css';
import image1 from '../../assets/img-1.jpg';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadMovieList } from '../../actions/action';

// useEffect(() => {
//   const parsed = qs.parse(props.location.search);
//   props.getPAMRequestList(parsed.name);
// }, []);

let imageArray = [1, 2, 4, 5, 4, 5, 6, 77, 4, 3, 2, 1, 5, 6, 4, 342, 2, 34, 5, 4, 23, 3, 23,].map(item => <li className="listStyle"><img className="imageStyle" src={image1} alt="test" /> </li>)
const MoviesList = () => (
  <div>
    <header className="App-header">Movies-Gallery-DeMo
      <ul className="mainlist">
        {imageArray}
      </ul>
    </header>
  </div>
);

const mapStateToProps = state => ({
  // getMovieList: state.privilegedAccounts.data;
});

const mapDispatchToProps = {
  loadMovieList,
};

MoviesList.propTypes = {
};

const MoviesListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);

export default MoviesListConnect;
