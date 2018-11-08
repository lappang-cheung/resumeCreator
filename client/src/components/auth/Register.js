import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { registerUser } from '../../actions/authActions'

class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        errors: {} 
    }

    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.setState({errors: nextProps.errors})
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        const {firstName, lastName, email, password, password2 } = this.state

        const newUser = {
            firstName, lastName, email, password, password2
        }

        this.props.registerUser(newUser, this.props.history)
    }

    render() {

        const { errors } = this.state

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>
                            <form onSubmit={this.onSubmit}>
                                
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.firstName
                                        })}
                                        placeholder="First name" 
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.onChange} 
                                    />
                                    {errors.firstName && (<div className="invalid-feedback">{errors.firstName}</div>)}
                                </div>

                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.lastName
                                        })}
                                        placeholder="Last name" 
                                        name="lastName"
                                        value={this.state.lastName} 
                                        onChange={this.onChange} 
                                    />
                                    {errors.lastName && (<div className="invalid-feedback">{errors.lastName}</div>)}
                                </div>

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

                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.password2
                                        })}
                                        placeholder="Confirm Password" 
                                        name="password2" 
                                        value={this.state.password2}
                                        onChange={this.onChange} 
                                    />
                                    {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register))