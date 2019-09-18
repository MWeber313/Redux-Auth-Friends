import React from 'react';
import './Friend.css';
import {connect} from 'react-redux';

import {deleteFriend} from "../actions";

import EditFriend from "./EditFriend";
class Friend extends React.Component {
    constructor(props) {
    super(props);
    }

    toggleSubmit = e => {
        e.preventDefault();
        this.props.toggleEdit()
    }

    deleteFriend = id => {
        this.props.deleteFriend(id)
    }

    render(){
        console.log(this.props.editingFriend)
    return (
        <div>
            <h1>{this.props.friendProps.name}</h1>
            <h3>{this.props.friendProps.age}</h3>
            <h3>{this.props.friendProps.email}</h3>
            <button onClick={() => this.deleteFriend(this.props.friendProps.id)}>Delete Friend</button>
            <button className={this.props.editingFriend ? "hidden" : ""} onClick={(e) => this.toggleSubmit}>Edit Friend!</button> 
            {this.props.editingFriend ? <EditFriend friendState={this.props.friendProps} editing={this.state.editing}/> : ""}
        </div>
    )
    }
} 

const mapStateToProps = state => ({
    editingFriend: state.editingFriend
})


export default connect(mapStateToProps, {deleteFriend})(Friend);