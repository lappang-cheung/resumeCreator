// Requiresd modules
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

// Load the model
const User = require('mongoose').model('users')

// Custom variables
const keys = require('../config/keys')
const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys.secretOrKey

module.exports = passport => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id)
        if(user){
            return done(null, user)
        }
        return done(null, false)
    }))
}