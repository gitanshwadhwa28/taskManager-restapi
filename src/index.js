const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRoute = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(userRoute)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})