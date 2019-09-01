import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">

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
