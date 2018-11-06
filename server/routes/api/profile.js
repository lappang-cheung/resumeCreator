// Required modules
const router = require('express').Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load models
const Profile = require('../../models/Profile')
const User = require('../../models/User')

// Load validation
const validateProfileInput = require('../../validation/profile')

// @route   Get API route
// @desc    Test profile route
// @access  Public
router.get('/test', async(req, res, next) => {
    res.json({ message: "Profile test route"})
})

// @route   Get API route
// @desc    Get current user profile route
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {

    const errors = {}

    const profile = await Profile.findOne({ user: req.user.id })
    if(!profile){
        errors.noprofile = 'There no profile for this user'
        return res.status(404).json(errors)
    }else{
        return res.status(200).json(profile)
    }
})

// @route   Post API route
// @desc    Create/Update user profile route
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {

    const { errors, isValid } = validateProfileInput(req.body)
    // Check validation
    if(!isValid){
        // Return any errors with 400 status
        return res.status(400).json(errors)
    }

    const profileFields = {}
    profileFields.user = req.user.id

    if(req.body.handle) profileFields.handle = req.body.handle
    if(req.body.company) profileFields.company = req.body.company
    if(req.body.website) profileFields.website = req.body.website
    if(req.body.location) profileFields.location = req.body.location
    if(req.body.status) profileFields.status = req.body.status
    if(req.body.bio) profileFields.bio = req.body.bio

    // Skills
    if(typeof req.body.skills !== 'undefined'){
        profileFields.skills = req.body.skills.split(',')
    }

    // Social
    profileFields.social = {}
    if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin
    if(req.body.angellist) profileFields.social.angellist = req.body.angellist
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter
    if(req.body.github) profileFields.social.github = req.body.github
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook
    if(req.body.dribble) profileFields.social.dribble = req.body.dribble
    if(req.body.behance) profileFields.social.behance = req.body.behance

    const profile = await Profile.findOne({ user: req.user.id })

    if(profile){
        // Update
        Profile.findOneAndUpdate(
            { user: req.user.id }, 
            { $set: profileFields },
            { new: true }
        ).then(profile => res.json(profile))
    }else{
        // Create


        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle })
            .then(profile => {
                if(profile){
                    errors.handle = 'That handle already exists'
                    res.status(400).json(errors)
                }

                // Save Profile
                new Profile(profileFields)
                    .save()
                    .then(profile => res.json(profile))
            })
    }
})

module.exports = router