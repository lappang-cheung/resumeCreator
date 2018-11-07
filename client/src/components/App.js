import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

import Navbar from '../components/layout/Navbar'
import Landing from '../components/layout/Landing'
import Footer from '../components/layout/Footer'

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <Route exact path="/" component={Landing}/>
                    <Footer />
                </>
            </Router>
        )
    }
}

export default App