import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { getPlanetsListAction } from '../../redux/MovieDetails/actions';
import MovieDetails from '../../components/movieDetails/movieDetails';

const mapStateToProps = state => ({
  // fetching: state.planetsListReducer.fetching,
  // error: state.planetsListReducer.error,
  // planetsList: state.planetsListReducer.planetsList,
  // pageURLNo: state.planetsListReducer.pageURLNo,
  // count: state.planetsListReducer.count
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // getPlanetsListAction
    },
    dispatch
  );
};

const MovieDetailsContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieDetails)
);

export default MovieDetailsContainer;
