const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/dashboard.html'));
});

router.get('/add-pizza', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/add-pizza.html'));
});

router.get('/add-attribute', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/add-attribute.html'));
});

router.get('/pizza', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/pizza.html'));
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/register.html'));
});

module.exports = router;
