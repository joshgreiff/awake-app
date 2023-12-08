const { Schema, model } = require('mongoose')

const AttributeSchema = new Schema({
    attributeName: {
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

// Create the Attribute model using the Attribute schema
const Attribute = model('Attribute', AttributeSchema)

// Export the Attribute schema
module.exports = { Attribute }