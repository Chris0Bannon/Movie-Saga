import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';



class App extends Component {

  componentDidMount=() => {
this.props.dispatch({
  type: 'GET_MOVIES'
})
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
<ul>
  {this.props.reduxStore.movies.map(film => 
   <li key = {film.id}> <img src={film.poster}/>{film.title} {film.description}   </li>
  )}
</ul>
        <p>Empty Page</p>
      </div>
    );
  }
}

const mapStoreToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStoreToProps)(App);
