import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Movies from '../Movies/Movies';

class App extends Component {

  componentDidMount=() => {
this.props.dispatch({
  type: 'GET_MOVIES'
})
  }

  movieClicker = (id) => {
    console.log('you clicked a movie', id);
    
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Movies/>
{/* <ul>
  {this.props.reduxStore.movies.map(film => 
   <li key = {film.id} onClick = {this.movieClicker}> <img src={film.poster}/>{film.title} {film.description}   </li>
  )}
</ul> */}
        <p>Empty Page</p>
      </div>
      <Route exact path = "/" Component={Movies}/>
      </Router>
    );
  }
}

const mapStoreToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStoreToProps)(App);
