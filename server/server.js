// Required modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Custom variables
const app = express()
const PORT = process.env.PORT || 5000
const keys = require('./config/keys')

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.get('/', async (req, res) => res.send("Hello"))

// Connecting to DB and setting port
app.listen(PORT, async() => {
    await mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    console.log(`Listening on port ${PORT}`)
})