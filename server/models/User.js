const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema)