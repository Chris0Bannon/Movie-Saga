import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Movies from '../Movies/Movies';
import Details from '../Details/Details';

class App extends Component {

  componentDidMount=() => {
this.props.dispatch({
  type: 'GET_MOVIES'
})
  }

  
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Details/>
        <Movies/>
        <p>Empty Page</p>
      </div>
      <Route exact path = "/" Component={Movies}/>
      <Route path = "/details" Component={Details}/>
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
