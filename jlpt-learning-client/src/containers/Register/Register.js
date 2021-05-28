import React, { Component } from 'react';
import './Register.scss';
import {Form, Button} from 'react-bootstrap'
import userApi from '../../api/userApi';
import { isLogin } from '../../auth/userAuth';
import { Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            rePassword: '',
            errors: {},
            alertSuccess: false
        }
    }

    inputOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        const {email, name, password, rePassword} = this.state;
        console.log(this.state)
        var errors = {};
        if(email && password && name && rePassword && password === rePassword){
            // call Api here
            // redirect login page
            userApi.create(JSON.stringify({
                email: email,
                name: name,
                password: password
            })).then(res => {
                if(true){   // if create account succes
                    this.setState({alertSuccess: true});
                    const {history} = this.props;
                    this.setTimeoutId = setTimeout(() => history.push('/login'), 500);
                }
                else {
                    //..... 
                }
            })
            return ;
        }
        if(!email) errors.email = "Email is required!";
        else {
            if(email.indexOf('@') < 0) errors.email = "This is not a email!"
        }
        if(!name) errors.name = "Name is required!";
        if(name.length > 30) errors.name = "Name is not longer 30 character!";
        if(!password) errors.password = "Password is required!";
        if(!rePassword) errors.rePassword = "Re-password is required!";
        if(password && rePassword && password !== rePassword) errors.checkPassword = "The re-password must be the same as the above!";
        this.setState({errors: errors})
    }

    componentWillUnmount(){
        clearTimeout(this.setTimeoutId);
    }

    render() {
        if(isLogin()) return <Redirect to="/" /> ;

        const {errors, email, name, password, rePassword, alertSuccess} = this.state;
        return (
           
            <div className="register d-flex flex-column align-items-center justify-content-center">
                <div style={alertSuccess ? {display: 'block'} : {display: 'none'}} className="alert-success">Register success!</div>
                <h4>Register</h4>
                <Form className="login__form">
                    
                    <Form.Group>
                        <Form.Label>Your name</Form.Label>
                        {
                            errors.name ? <p className="alert">* {errors.name} </p> : ''
                        }
                        <Form.Control type="text" placeholder="Enter name" value={name} name="name" onChange={this.inputOnchange} />
                    </Form.Group>
            
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        {
                            errors.email ? <p className="alert">* {errors.email} </p> : ''
                        }
                        <Form.Control type="email" placeholder="Enter email" value={email} name="email" onChange={this.inputOnchange} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        {
                            errors.password ? <p className="alert">* {errors.password} </p> : ''
                        }
                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.inputOnchange} />
                    </Form.Group>
            
                    <Form.Group controlId="formBasicRePassword">
                        <Form.Label>Re-password</Form.Label>
                        {
                            errors.rePassword ? <p className="alert">* {errors.rePassword} </p> : ''
                        }
                        {
                            errors.checkPassword ? <p className="alert">* {errors.checkPassword} </p> : ''
                        }
                        <Form.Control type="password" placeholder="Re-password" name="rePassword" value={rePassword} onChange={this.inputOnchange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.register}>
                        Register
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Register;