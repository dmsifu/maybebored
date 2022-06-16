const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const addToDatabase = require('./scripts/addToDatabase')

connectDB()

const app = express()

addToDatabase()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/routes'))

app.listen(port, ()=>{
    console.log(`server started on ${port}`)
})