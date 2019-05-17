import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }


    render() {
        console.log(this.props.friendsList)
        return (
            <p>Friends 1, 2, 3</p>
        )
    }
}

const mapStateToProps = state => ({ 
    friendsList: state.friendsReducer.friendsList
})

export default new FriendsList(
    connect(
        mapStateToProps,
        { getData }
    )(FriendsList)
)

