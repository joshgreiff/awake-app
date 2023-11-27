const cleverbot = require('cleverbot-free')
const express = require('express')
const app = express()
const cors = require('cors')

const { respond } = require('./chatGptController')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

app.listen(8000, (req, res) => {
    console.log('API server now running on port 8000')
})