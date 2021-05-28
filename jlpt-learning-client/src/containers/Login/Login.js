import React, { Component } from 'react';
import './Login.scss';
import {Form, Button} from 'react-bootstrap'
import userApi from '../../api/userApi';
import { setUserToken, isLogin } from '../../auth/userAuth';
import {Redirect} from 'react-router-dom';
import UserProvider from '../../components/UserProvider';
import UserContext from '../../contexts/UserContext'


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.handleChageMail = this.handleChageMail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.login = this.login.bind(this);
    }

    handleChageMail(e){
        this.setState({email: e.target.value});
    }

    handleChangePassword(e){
        this.setState({password: e.target.value})
    }

    login(e, callback){
        e.preventDefault();
        const {email, password} = this.state;
        if(email && password) {
            userApi.login(JSON.stringify({
                email: email,
                password: password
            })).then(res => {
                if(res.data.cookies){ // login success
                    setUserToken(res.data.cookies);
                    const {location, history} = this.props;
                    var from = {pathname: '/'};
                    if(location.state){
                        from = location.state.from;
                    }
                    sessionStorage.setItem("user", JSON.stringify({
                        email: email,
                        name: res.data.user[0].name,
                        id: res.data.user[0].id
                    }))
                    history.replace(from);
                    window.location.reload();
                } else { // login fail
                    const errors = {message: res.data.message};
                    this.setState({errors: errors});
                }
            })

        }
        var errors = {};
        if(!email) errors.email = 'Email is required!';
        else {
            if(email.indexOf('@') < 0) errors.email = "This is not a email!"
        }
        if(!password) errors.password = 'Password is required!';
        this.setState({errors: errors});
    }


    render() {
        if(isLogin()) return (<Redirect to="/" />); // when have user active

        const {errors, email, password} = this.state;
        return (
            <div className="login d-flex flex-column align-items-center justify-content-center">
                <h4>Login</h4>
                
                <Form className="login__form">
                    {
                        errors.message && <p className="alert">Login fail: {errors.message} </p>
                    }
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        {
                            errors.email && <p className="alert">* {errors.email} </p>
                        }
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={this.handleChageMail} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        {
                            errors.password && <p className="alert">* {errors.email} </p>
                        }
                        <Form.Control type="password" placeholder="Password" value={password} onChange={this.handleChangePassword} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save login account for next time" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={this.login}>
                        Login 
                    </Button>
                    
                </Form>
            </div>
        );
    }
}

export default Login;