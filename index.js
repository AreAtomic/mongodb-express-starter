const express = require('express')

// import for wor whitelist allow only
const cors = require('cors')

// import for config
const server = express()
const config = require('./config')
const connectDB = require('./config/db')

// Config
server.use(express.json({ extended: false }))
server.disable('x-powered-by')
server.listen(config.port)

connectDB()

server.use('/api', require('./routes/root'))
