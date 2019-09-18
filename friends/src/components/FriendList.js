import React from 'react';
import {connect} from 'react-redux';

import {getFriends, deleteFriend, editFriend} from "../actions";

import Friend from './Friend'

class FriendsList extends React.Component {
    componentDidMount(){
        this.props.getFriends();
    }

    render(){
    return(
        <div>
            {this.props.friends.map(friend => {
                return <Friend key={friend.id} friendProps={friend}/>
            })}
        </div>
    )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingData: state.friends
})
const mapActionsToProps = {
    getFriends,
    deleteFriend,
    editFriend
}

export default connect(mapStateToProps, mapActionsToProps)(FriendsList);