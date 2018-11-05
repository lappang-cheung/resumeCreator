// Required modules
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')

// Custom modules
const helpers = require('../../util/helpers')
const keys = require('../../config/keys')

// Load the model
const User = require('../../models/User')

// Load validations
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

// @route   Get API route
// @desc    Test user route
// @access  Public
router.get('/test', async(req, res, next) => {
    res.json({ message: "User test route"})
})

// @route   Post API route
// @desc    Create user route
// @access  Public
router.post('/register', async(req, res) => {
    // Destrucuting register validation
    const { errors, isValid } = validateRegisterInput(req.body)
    // Check validation
    if(!isValid){
        return res.status(400).json(errors)
    }
    // Store the state of the user
    const user = await User.findOne({ email: req.body.email })
    // Check if the user email already exist
    if(user){
        errors.email = 'Email already exist'
        // Return 400 if email already exist
        return res.status(400).json({ errors })
    }else{
        // Create new user object
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            avatar: req.body.avatar,
            password: helpers.hash(req.body.password)
        })
        // Save the object
        newUser.save()
            .then(user => res.status(200).json(user))
            .catch(err => console.log(err))
    }
})

// @route   Get API route
// @desc    Login user route
// @access  Public
router.post('/login', async(req, res) => {
    // Destructing login validation
    const { errors, isValid } = validateLoginInput(req.body)
    // Check validation
    if(!isValid){
        return res.status(400).json(errors)
    }
    // Destructing for email and password from the body
    const { email, password } = req.body
    // Store the state of the user
    const user = await User.findOne({ email })
    // Check if user email exist
    if(!user){
        errors.email = 'Email not found'
        // Return 404 if the email does not exist
        return res.status(404).json({ errors })
    }else{
        // Create the hash password and compare the hash password
        if(helpers.hash(password) === user.password){
            // Create the payload
            const payload = {
                id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    avatar: user.avatar
            }
            // JSON web token
            jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    })
                }
            )
        }else{
            // Return 404 when password is incorrect
            return res.status(400).json({ password: 'Password is incorrect'})
        }
    }
})

// @route   GET API route
// @desc    Current user route
// @access  Private
router.get('/currentUser', passport.authenticate('jwt', { session: false }), (req, res) => {

    const { id, firstName, lastName, avatar, email } = req.user

    res.json({
        id,
        firstName,
        lastName,
        avatar,
        email
    })
})

// Export the route
module.exports = router