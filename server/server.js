// Required modules
const express = require('express')
const mongoose = require('mongoose')

// Custom variables
const app = express()
const PORT = process.env.PORT || 5000

// Routes
app.get('/', async (req, res) => res.send("Hello"))

// App initialize
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))