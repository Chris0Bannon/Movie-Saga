import React, {Component} from 'react';
import {connect} from 'react-redux';

class Movies extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: "GET_MOVIES"
    });
  };

  movieClicker = id => {
    console.log("you clicked a movie", id);
  };

  render() {
    return (
      <div>
        <h1>Hello from Movies!</h1>
        <ul>
          {this.props.reduxStore.movies.map(film => (
            <li key={film.id} onClick={this.movieClicker}>
              {" "}
              <img src={film.poster} />
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