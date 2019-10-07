import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MovieDetails from '../../components/movieDetails/movieDetails';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
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
