const express = require('express');
const { getAproduct } = require('../controller/getAproduct');

const router = express.Router();



router.get('/:id', getAproduct)





module.exports = router