import React from 'react';
import joi from 'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
    state = {
        data: { username: '', password: '', name: ''},
        errors: {}
    };

    schema = {
        username: joi.string().required().email().label("Username"),
        password: joi.string().required().min(5).label("Password"),
        name: joi.string().required().label("Name")
    };

    doSubmit = () => {
        // call the server
        console.log('registered');
    }

    render() { 
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Register')}
                </form>
            </div>
        );
    }
}
 
export default RegisterForm;