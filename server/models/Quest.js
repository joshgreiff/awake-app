const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const QuestSchema = new Schema({
    questName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    
},
{
  toJSON: {
    virtuals: false,
    getters: true
  },
  id: false
})

// Create the Quest model using the Quest schema
const Quest = model('Quest', QuestSchema)

// Export the Quest schema
module.exports = { Quest }