import React from 'react';
import {addFriend} from '../actions';
import {connect} from 'react-redux';

class AddFriend extends React.Component {
    state = {
       newFriend: {
            name: "",
            age: "",
            email:""
        }
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriendSubmit = e => {
        e.preventDefault()
        this.props.addFriend(this.state.newFriend).then(() => {
            this.props.history.push("/protected");
        });
        this.setState({
            newFriend: {
                name: "",
                age: "",
                email: ""
            }
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.addFriendSubmit}>
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
                    <button type="submit">Add Friend!</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addFriend })(AddFriend);