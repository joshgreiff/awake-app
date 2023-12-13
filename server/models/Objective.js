const { Schema, model } = require('mongoose')

const ObjectiveSchema = new Schema({
    objectiveName: {
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

// Create the Objective model using the Attribute schema
const Objective = model('Objective', ObjectiveSchema)

// Export the Attribute schema
module.exports = { Objective }