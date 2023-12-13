const { Attribute } = require('../models/Attribute')

const OpenAIApi = require('openai')
require('dotenv').config()

const configuration = new OpenAIApi({
    apiKey: process.env.OPENAI_KEY
})

const openai = new OpenAIApi(configuration)

const chatGptController = {
    // Get all attributes
    getResponse(req, res){
        openai.chat.completions.create({
            messages: [{ role: "system", content: req.body.prompt }],
            model: "gpt-3.5-turbo",
        }).then(chatData => res.json(chatData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },
}

module.exports = chatGptController