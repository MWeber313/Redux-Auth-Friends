import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import FriendList from './components/FriendList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

const App = () => {
return(
    <Router>
    <div>
        <ul>
            <li>
                <Link to ="/login">Login</Link>
            </li>
            <li>
                <Link to ="/protected">See Your Friends</Link>
            </li>
            <li>
                <Link to ="/addfriend">Add A Friend</Link>
            </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendList}></PrivateRoute>
        <PrivateRoute exact path="/addfriend" component={AddFriend}></PrivateRoute>
    </div>
    </Router>
)
}

export default App;