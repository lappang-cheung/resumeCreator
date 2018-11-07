import React, { Component } from 'react'

import Navbar from '../components/layout/Navbar'
import Landing from '../components/layout/Landing'
import Footer from '../components/layout/Footer'

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Landing />
                <Footer />
            </>
        )
    }
}

export default App