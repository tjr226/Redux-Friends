import React from 'react';
import { connect } from "react-redux";

import { deleteData } from '../actions';

class Friend extends React.Component {

    deleteFriend = e => {
        e.preventDefault();
        this.props.deleteData(this.props.id);
    }

    render() {
        return (
            <div>
                {this.props.name}, {this.props.age} years old, {this.props.email}
                <button onClick={this.deleteFriend}>X</button>
            </div>
        )
    }
}


export default connect(
    null ,
    { deleteData }
)(Friend);
