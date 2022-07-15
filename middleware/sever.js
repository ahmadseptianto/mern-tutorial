const colors = require('colors')
const connectDb = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
connectDb()