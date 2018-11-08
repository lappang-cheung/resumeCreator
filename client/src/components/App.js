import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { Provider } from 'react-redux'

import store from '../store'
import setAuthToken from '../utils/setAuthToken'
import { setCurrentUser } from '../actions/authActions'

import Navbar from '../components/layout/Navbar'
import Landing from '../components/layout/Landing'
import Footer from '../components/layout/Footer'

import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

// Check for token
if(localStorage.jwtToken){
    // Set auth token header
    setAuthToken(localStorage.jwtToken)
    // Decode token and get user info
    const decoded = jwt_decode(localStorage.jwtToken)
    // Set use and isAuthenticated
    store.dispatch(setCurrentUser(decoded))
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <>
                        <Navbar />
                        <Route exact path="/" component={Landing}/>
                        <div className="container">
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                        </div>
                        <Footer />
                    </>
                </Router>
            </Provider>
        )
    }
}

export default App