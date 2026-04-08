const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

//userdefined
const StudentRouter = require('./route/student')
const courseName = require('./route/courses')

//middleware
app.use(express.json())
app.use('/student', StudentRouter)
app.use('/course',courseName)



app.listen(4100, ()=>{
    console.log('server start at port no 4100')
})