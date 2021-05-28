import React, { Component } from 'react';

import UserContext from '../contexts/UserContext';

class UserProvider extends Component {
    constructor(props){
        super(props);
        this.state = JSON.parse(sessionStorage.getItem("user")) || {
            name: '',
            email: '',
            id: ''
        };
    }

    saveUser = (user) => {
        console.log('callback is action!')
        this.setState(user);
    }

    render() {
        const {name, email, id} = this.state;
        return (
            <UserContext.Provider
                value={{
                    name: name,
                    email: email,
                    id: id,
                    saveUser: this.saveUser
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;