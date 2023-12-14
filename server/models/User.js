const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
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

// Create the User model using the Quest schema
const User = model('User', UserSchema)

// Export the Quest schema
module.exports = { User }