const router = require('express').Router()
const { register } = require('../../controllers/user-controller')

// Set up GET all and POST at /api/quests
router
    .route('/')
    .post(register)




module.exports = router