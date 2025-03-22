const express = require('express');
const router = express.Router();
const { getNumbers } = require('../controllers/numController');

router.get('/:numberId', getNumbers);

module.exports = router;