import React, { Component, useEffect } from 'react';
import './moviesList.css';
import image1 from '../../assets/img-1.jpg';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

//import { loadMovieList } from '../../actions/action';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

class MoviesList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      movieList: this.props.movieList,
      byName: '',
      byYear: '',
    };
  }
  componentDidMount() {
    this.props.getImageList();
  }
  componentDidUpdate() {
    if (this.state.movieList === null) {
      this.setState({
        movieList: this.props.movieList
      });
    }
  }

  reset = e => {
    this.setState({
      movieList: this.props.movieList,
      byName: '',
      byYear: '',
    });

  }
  searchByName = prop => e => {
    this.setState({
      movieList: this.props.movieList.filter(item => {
        let name = this.state.byName;
        let year = this.state.byYear;
        if (prop === 'byName') {
          name = e.target.value;
        }
        if (prop === 'byYear') {
          year = e.target.value;
        }
        return item.genre.toLowerCase().indexOf(name.toLowerCase()) !== -1 && item.productionYear.toString().indexOf(year) !== -1;
      }),
      [prop]: e.target.value
    });

  }
  seeMovieDetails = item => {

    console.log("See Movie details Page ++++++");
    this.props.history.push('/details', item);
  }
  render() {
    const data = this.state.movieList || [];
    let imageArray = [];
    data.forEach(element => {
      imageArray.push(<li key={element.image} className="grid-contents" onClick={() => this.seeMovieDetails(element)}><img className="image-style" src={element.image} alt="movies" /><div className="movie-name-title">{element.name}</div> </li>);
    });
    return (
      <div>
        <header className="App-header">
          <div className="searchMainSection">
            <div className = "headerSectionContents">
              <label>Movies List</label>
            </div>
            <div className = "headerSectionContents">
              <input type="text" className="SearchBoxSection" value={this.state.byName} onChange={this.searchByName('byName')} placeholder = "Search By Genre like Action, Animation, etc"></input>
            </div>
            <div className = "headerSectionContents">
              <input type="text" className="SearchBoxSection" value={this.state.byYear} onChange={this.searchByName('byYear')} placeholder = "Search By Year like 2016, 2003, 2018, etc"></input>
            </div>
            <div className = "headerSectionContents">
              <button onClick={this.reset} className="clear-search-btn"> Clear Search</button>
            </div>
          </div>
        </header>
        <ul className="mainList">
          {imageArray}
        </ul>
      </div>
    );
  }
}

export default MoviesList;
