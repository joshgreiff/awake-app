const router = require('express').Router();
const htmlRoutes = require('./html/html-routes');
const apiRoutes = require('./api')
const loginRoutes = require('./login')


router.use('/', htmlRoutes);
router.use('/api', apiRoutes);
router.use('/account', loginRoutes)

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
