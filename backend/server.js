const express = require('express')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/routes'))

app.listen(port, ()=>{
    console.log(`server started on ${port}`)
})