import React, { Component } from 'react'

class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        errors: {} 
    }

    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>
                            <form action="create-profile.html">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="First name" 
                                        name="firstName"
                                        value={this.state.firstName} 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Last name" 
                                        name="lastName"
                                        value={this.state.lastName} 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className="form-control form-control-lg" 
                                        placeholder="Email Address" 
                                        name="email" 
                                        value={this.state.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="form-control form-control-lg" 
                                        placeholder="Password" 
                                        name="password" 
                                        value={this.state.password}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="form-control form-control-lg" 
                                        placeholder="Confirm Password" 
                                        name="password2" 
                                        value={this.state.password2}
                                    />
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

export default Register