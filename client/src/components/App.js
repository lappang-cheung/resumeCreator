import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

import Navbar from '../components/layout/Navbar'
import Landing from '../components/layout/Landing'
import Footer from '../components/layout/Footer'

import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

class App extends Component {
    render() {
        return (
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
        )
    }
}

export default App