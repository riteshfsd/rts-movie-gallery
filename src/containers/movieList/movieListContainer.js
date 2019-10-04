import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getImageList } from '../../redux/movieList/actions';
import MoviesList from '../../components/moviesList/moviesList';

const mapStateToProps = state => ({
  movieList: state.movieListReducer.movieList
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getImageList
    },
    dispatch
  );
};

const MovieListContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MoviesList)
);

export default MovieListContainer;
