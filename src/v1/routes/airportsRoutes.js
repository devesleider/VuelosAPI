const express = require('express');
const router = express.Router();
const airportsController = require('../../controllers/airportsController')

router
    .get("/", airportsController.getAllAirports);

module.exports = router;
