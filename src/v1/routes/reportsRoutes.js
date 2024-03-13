const express = require('express');
const router = express.Router();
const reportsController = require('../../controllers/reportsController')

router
    .get("/topReservation", reportsController.getTopReservations)
    .get("/countAirline", reportsController.getCountAirline);

module.exports = router;
