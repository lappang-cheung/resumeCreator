// Required modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

// Custom routes
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')

// Custom variables
const app = express()
const PORT = process.env.PORT || 5000
const keys = require('./config/keys')

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Default route
app.get("/", (req, res) => res.send("Hello world"))

// Routes
app.use('/api/users', users)
app.use('/api/profile', profile)

// Passport Middleware & Config
app.use(passport.initialize())
require('./config/passport')(passport)

// Connecting to DB and setting port
app.listen(PORT, async() => {
    await mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    console.log(`Listening on port ${PORT}`)
})