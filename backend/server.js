const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const addToDatabase = require('./scripts/addToDatabase')
const path = require('path')

connectDB()

const app = express()

// addToDatabase()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/routes'))

//serve frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}
else{
    app.get('/', (req,res) => res.send('Please set to production'))
}

app.listen(port, ()=>{
    console.log(`server started on ${port}`)
})