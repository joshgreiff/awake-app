const router = require('express').Router()

const loginRoute = require('../login/login')

const registerRoute = require('../login/register')


// Add prefix of /quests to routes in quest-routes.js
router.use('/login', loginRoute)
router.use('/register', registerRoute)


module.exports = router