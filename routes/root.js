const express = require('express')
const router = express.Router()

/**
 * @route http://localhost:5000/api/
 * @description The page that show the API is Running
 */
router.get('/', async (req, res) => {
    res.send(
        '<h1>Your API to configure</h1><p>How to create routes:</p><ol><li>Create file in ./routes/</li><li>import express as require("express")</li><li>Create a router</li><li>Exports the router as a module</li></ol>'
    )
})

module.exports = router
