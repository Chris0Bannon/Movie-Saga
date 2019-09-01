import React, {Component} from 'react';
import {connect} from 'react-redux';

class Movies extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: "GET_MOVIES"
    });
  };

  getGenres = id => {
    let action = {
      type: "FETCH_GENRES",
      payload: id
    };
    this.props.dispatch(action);
  };

  getDetails = id => {
    let action = {
      type: "FETCH_DETAILS",
      payload: id
    };
    console.log(action);
    this.props.dispatch(action);
  };

  movieClicker = id => {
    console.log("you clicked a movie", id);
    this.getDetails(id);
    this.getGenres(id);
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <div>
        <h1>Hello from Movies!</h1>
        <ul>
          {this.props.reduxStore.movies.map(film => (
            <li
              key={film.id}
              onClick={() => {
                this.movieClicker(film.id);
              }}
            >
              {" "}
              <img src={film.poster} alt="" />
              {film.title} {film.description}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Movies)