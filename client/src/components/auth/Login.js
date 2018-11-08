import React, { Component } from 'react'
import classnames from 'classnames'
import axios from 'axios';

class Login extends Component {

    state = {
        email: '',
        password: '',
        errors: {}
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault()
        const { email, password } = this.state
        const user = {
            email, password
        }
        console.log(user)
        
        axios.post('/users/login', user)
            .then(response => console.log(response.data))
            .catch(err => this.setState({ errors: err.response.data }))
    }

    render() {

        const { errors } = this.state

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>
                        <p className="lead text-center">Sign in to your account</p>
                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.email
                                        })}
                                    placeholder="Email Address" 
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="password" 
                                    className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.password
                                    })}
                                    placeholder="Password" 
                                    name="password" 
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                            </div>

                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login