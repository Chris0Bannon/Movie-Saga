import React, {Component} from 'react';
import {connect} from 'react-redux'

class EditPage extends Component {
    state = {

    }

    handleBack = () => {
        this.props.history.push(`/details/${this.props.match.params.id}`)
    }

    render() {
        return (
          <div>
            <h1>Hello from EditPage</h1>
            <button onClick = {this.handleBack}>Cancel</button>
            <button onClick= {this.handleSaveChanges}>Save Changes</button>
          </div>
        );
    }

}

export default connect()(EditPage);