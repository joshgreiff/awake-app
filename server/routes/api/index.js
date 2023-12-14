const router = require('express').Router()
const questRoutes = require('./quest-routes')
const attributeRoutes = require('./attribute-routes')
const chatGptRoutes = require('./chatgpt-routes')
const registerRoute = require('../login/register')


// Add prefix of /quests to routes in quest-routes.js
router.use('/quests', questRoutes)
router.use('/attributes', attributeRoutes)
router.use('/chat', chatGptRoutes)
router.use('/register', registerRoute)


module.exports = router