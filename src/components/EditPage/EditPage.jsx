import React, { Component } from "react";
import { connect } from "react-redux";

class EditPage extends Component {
  state = {
    title: "",
    description: ""
  };

  handleTitleChange = (event) => {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      ...this.state,
      description: event.target.value
    });
  };

  handleBack = () => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  handleSaveChanges = () => {
      console.log(this.state);
      
    this.props.dispatch({
      type: "EDIT_MOVIES",
      payload: {
        id: this.props.match.params.id,
        title: this.state.title,
        description: this.state.description
      }
    });
      this.props.history.push("/")
  };

  render() {
    return (
      <div>
        <h1>Hello from EditPage</h1>
        <input onChange={this.handleTitleChange} />
        <input onChange={this.handleDescriptionChange} />
        <button onClick={this.handleBack}>Cancel</button>
        <button onClick={this.handleSaveChanges}>Save Changes</button>
      </div>
    );
  }
}

const mapStoreToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStoreToProps)(EditPage);
