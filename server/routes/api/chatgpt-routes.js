const router = require('express').Router()
const { getResponse } = require('../../controllers/chatgpt-controller')

// Set up GET all and POST at /api/attributes
router
    .route('/')
    .get(getResponse)





module.exports = router