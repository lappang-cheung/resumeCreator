const express = require('express')
const router = express.Router()

// @route   Get API route
// @desc    Test profile route
// @access  Public
router.get('/test', async(req, res, next) => {
    res.json({ message: "Profile test route"})
})

module.exports = router