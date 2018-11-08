import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner">
                    <div className="container">
                        <div className="jumbotron">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="display-3 mb-4">Resume Builder</h1>
                                    <p className="lead"> Create a simple resume with a few clicks</p>
                                    <hr />
                                    <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                                    <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing