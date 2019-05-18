import React from "react";
import { connect } from "react-redux";

import { postData } from '../actions';

class AddFriend extends React.Component {
    state = {
        newFriend: {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    createNewFriend = e => {
        console.log(this.state.newFriend);
        e.preventDefault();
        this.props.postData(this.state.newFriend)
    }

    render() {
        return (
            <form onSubmit={this.createNewFriend}>
                <input
                    type="text"
                    name="name"
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="email"
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                />
                <button>Add Friend</button>
            </form>
        )
    }
}

// i don't *think* this is needed, but leaving the mapStateToProps from Login.js for reference just in case
// const mapStateToProps = state => ({
    // loggingIn: state.loggingIn
// })

export default connect(
    null ,
    { postData }
)(AddFriend);