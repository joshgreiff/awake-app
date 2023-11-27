const OpenAIApi = require('openai')
require('dotenv').config()

const configuration = new OpenAIApi({
    apiKey: process.env.OPENAI_KEY
})

async function respond(prompt) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });

    return completion.choices[0];
}

const openai = new OpenAIApi(configuration)

module.exports = {
    respond
}