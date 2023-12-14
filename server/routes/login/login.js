const router = require('express').Router()
const { login } = require('../../controllers/user-controller')
// Set up GET all and POST at /api/quests
router
    .route('/')
    .get(login)




module.exports = router