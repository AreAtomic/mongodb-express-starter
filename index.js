const express = require('express')
const fileUpload = require('express-fileupload')

const cors = require('cors')

const server = express()
const config = require('./config')
const connectDB = require('./services/database')

server.use(
    '*',
    cors({
        origin: '*',
        optionsSuccessStatus: 204,
    })
)
server.use(express.json({ extended: false }))
server.use(fileUpload())
server.disable('x-powered-by')
server.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})

connectDB()

server.use('/api/v1', require('./api'))

const { errorMiddlewares } = require('./api/middlewares')
server.use(errorMiddlewares)
