const express = require('express')
const router = express.Router()

// @route   Get API route
// @desc    Test user route
// @access  Public
router.get('/test', async(req, res, next) => {
    res.json({ message: "User test route"})
})

module.exports = router