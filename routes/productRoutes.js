const express = require('express');
const { getAllproductStatic, getAllproduct } = require('../controller/getAllproduct');

const router = express.Router();



router.get('/finder', getAllproductStatic)

router.get('/items', getAllproduct)



module.exports = router