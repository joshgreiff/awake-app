const router = require('express').Router()
const questRoutes = require('./quest-routes')
const attributeRoutes = require('./attribute-routes')


// Add prefix of /quests to routes in quest-routes.js
router.use('/quests', questRoutes)
router.use('/attributes', attributeRoutes)

module.exports = router