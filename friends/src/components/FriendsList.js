import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';
import Friend from './Friend';
import AddFriend from './AddFriend';

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        // console.log("current friendslist", this.props.friendsList)
        return (
            <div>
            {this.props.friendsList.map(friend => {
                return <Friend
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                        />
            } )}
            <AddFriend />
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    friendsList: state.friendsReducer.friendsList
})

export default connect(
        mapStateToProps,
        { getData }
    )(FriendsList)


