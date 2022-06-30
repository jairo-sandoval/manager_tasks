const express = require('express')
const { routerUser } = require('./routers/userRouter')
const { routerTask } = require('./routers/taskRouter')
const app = express()

app.use(express.json())

//routers
app.use('/api/v1/users', routerUser)
app.use('/api/v1/tasks', routerTask)

app.use('*', (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        status: 'fail',
        message: err.message,
        error: err,
        stack: err.stack,
    })
})

module.exports = { app }


