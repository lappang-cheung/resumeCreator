// Required modules
const express = require('express')
const router = express.Router()
// Custom modules
const helpers = require('../../util/helpers')
// Load the model
const User = require('../../models/User')

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
    // Store the state of the user
    const user = await User.findOne({ email: req.body.email })
    // Check if the user email already exist
    if(user){
        // Return 400 if email already exist
        return res.status(400).json({ email: 'Email already exist'})
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
    const { email, password } = req.body
    
    const user = await User.findOne({ email })

    if(!user){
        return res.status(404).json({ email: 'Email not found'})
    }else{
        if(helpers.hash(password) === user.password){
            res.json({ message: 'Success'})
        }else{
            return res.status(400).json({ password: 'Password is incorrect'})
        }
    }
})

// Export the route
module.exports = router