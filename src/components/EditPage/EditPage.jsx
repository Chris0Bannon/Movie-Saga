import React, {Component} from 'react';
import {connect} from 'react-redux'

class EditPage extends Component {
    state = {

    }

    render() {
        return(
        <h1>Hello from EditPage</h1>
        )
    }

}

export default connect()(EditPage);