import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Movies from '../Movies/Movies';
import Details from '../Details/Details';
import EditPage from '../EditPage/EditPage';


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
      </div>
      <Route exact path= "/" component={Movies}/>
      <Route path="/details/:id" component={Details}/>
      <Route path="/editPage/:id" component={EditPage}/> 
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
