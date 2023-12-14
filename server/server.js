const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const session = require('express-session')

const { respond } = require('./chatGptController')



app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(express.json())


//session middleware
app.use(session({
    secret: "thisismysecrctekey",
    saveUninitialized:true,
    cookie: { maxAge: 30000 },
    }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/awake-app')

// Use this to log mongo queries being executed
mongoose.set('debug', true);

app.post('/chat', async(req, res) => {
    const { message } = req.body
    const response = await respond(message)
    res.json({
        response: response
    })
})

app.post('/chat2', async(req, res) => {
    const { message } = req.body

        const response = await respond(message)
   
    res.json({
        response: response
    })
})

app.use(require('./routes'));


app.listen(8000, (req, res) => {
    console.log('API server now running on port 8000')
})

module.exports = { app }