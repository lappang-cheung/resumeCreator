const express = require('express')
const router = express.Router()

const helpers = require('../../util/helpers')

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
    const user = await User.findOne({ email: req.body.email })
    if(user){
        return res.status(400).json({ email: 'Email already exist'})
    }else{
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            avatar: req.body.avatar,
            password: helpers.hash(req.body.password)
        })

        newUser.save()
            .then(user => res.status(200).json(user))
            .catch(err => console.log(err))
    }
})

module.exports = router