const { Schema, model } = require('mongoose')

const QuestSchema = new Schema({
    questName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

// Create the Quest model using the Quest schema
const Quest = model('Quest', QuestSchema)

// Export the Quest schema
module.exports = { Quest }