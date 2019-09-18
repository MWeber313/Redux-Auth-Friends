import React from 'react';
import {connect} from 'react-redux';
import {editFriend} from '../actions';
import './Friend.css';

class EditFriend extends React.Component {
    state={
        friend: this.props.friendState,
    };

    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    editFriendSubmit = (e) => {
        e.preventDefault()
        this.props.editFriend(this.state.friend);
        this.setState({
            editing: !this.props.editing
        })
    }

    render(){
       
        return(
            <div className={this.state.editing ? "" : "hidden"}>
                <form onSubmit={(event) => this.editFriendSubmit(event)}>
                    <input
                        name="name"
                        type="text"
                        onChange={this.handleChanges}
                        value={this.state.friend.name}
                    />
                    <input
                        name="age"
                        type="text"
                        onChange={this.handleChanges}
                        value={this.state.friend.age}
                    />
                    <input
                        name="email"
                        type="text"
                        onChange={this.handleChanges}
                        value={this.state.friend.email}
                    />
                    <button type="submit">Update friend!</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    editingFriend: state.editingFriend,
})

export default connect(mapStateToProps, {editFriend})(EditFriend);