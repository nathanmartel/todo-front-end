import React, { Component } from 'react'
import request from 'superagent';

export default class Login extends Component {
    
    state = {
        emailSignUp: '',
        passwordSignUp: '',
        display_nameSignUp: '',
        emailLogin: '',
        passwordLogin: '',
    }

    handleSignUp = async () => {
        const URL=`${process.env.REACT_APP_DB_URL}/api/auth/signup`;
        const newUser = {
            email: this.state.emailSignUp,
            password: this.state.passwordSignUp,
            display_name: this.state.display_nameSignUp,
        }
        const result = await request.post(URL, newUser);
        console.log(result);
    }
    
    handleLogin = async () => {
        const URL=`${process.env.REACT_APP_DB_URL}/api/auth/signin`;
        const newUser = {
            email: this.state.emailLogin,
            password: this.state.passwordLogin,
        }
        const result = await request.post(URL, newUser);
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result.body));
    }

    handleLogout = () => {
        localStorage.clear();
    }

    
    render() {
        return (
            <div>
                <div className='signup-container'>
                    <input onChange={(e) => this.setState({ emailSignUp: e.target.value })} value={this.state.emailSignUp} />
                    <input onChange={(e) => this.setState({ display_nameSignUp: e.target.value })} value={this.state.display_nameSignUp} />
                    <input onChange={(e) => this.setState({ passwordSignUp: e.target.value })} value={this.state.passwordSignUp} />
                    <button onClick={this.handleSignUp}>Sign Up</button>
                </div>
                <div className='signin-container'>
                    <input onChange={(e) => this.setState({ emailLogin: e.target.value })} value={this.state.emailLogin} />
                    <input onChange={(e) => this.setState({ passwordLogin: e.target.value })} value={this.state.passwordLogin} />
                    <button onClick={this.handleLogin}>Login</button>
                </div>
                <div>
                <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}
