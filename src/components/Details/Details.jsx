import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  componentDidMount = () => {
      this.getDetails();
      this.getGenres();
  };

  getGenres = id => {
      let action = {
          type: 'FETCH_GENRES',
          payload: this.props.match.params.id
      };
      this.props.dispatch(action)
  }

  getDetails = id => {
    let action = {
      type: "FETCH_DETAILS",
      payload: this.props.match.params.id
    };
    console.log(action);
    this.props.dispatch(action);
  };

handleBack = () => {
    this.props.history.push('/');
}
editPage = () => {
    this.props.history.push(`/editPage/${this.props.match.params.id}`)
}

  render() {
    return (
      <div>
          <ul>
              {this.props.reduxStore.genres.map((style)=> {
                  return (
                      <li key = {style.name}>{style.name}</li>
                  )
              })}
          </ul>
        <h1>
          Hello From Details!
          {this.props.reduxStore.details.title}
          {this.props.reduxStore.details.description}
        </h1>
        <img src={this.props.reduxStore.details.poster} alt="" />
        <button onClick= {this.handleBack}>Back to List</button>
        <button onClick ={this.editPage}>Click to edit this movie</button>
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