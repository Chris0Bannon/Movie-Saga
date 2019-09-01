import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  componentDidMount = () => {
      this.getDetails()
  };

  getDetails = id => {
    let action = {
      type: "FETCH_DETAILS",
      payload: this.props.match.params.id
    };
    console.log(action);
    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        <h1>
          Hello From Details!
          {this.props.reduxStore.details.title}
          {this.props.reduxStore.details.description}
        </h1>
        <img src={this.props.reduxStore.details.poster} alt="" />
      </div>
    );
  }
}

const mapStoreToProps =(reduxStore) => {
    return { 
        reduxStore
    }
}


export default connect(mapStoreToProps)(Details);