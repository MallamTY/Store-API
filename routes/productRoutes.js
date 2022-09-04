const express = require('express');
const { getAllproductStatic, getAllproduct } = require('../controller/getAllproduct');

const router = express.Router();



router.get('/products/static', getAllproductStatic)

router.get('/products/dynamic', getAllproduct)



module.exports = router