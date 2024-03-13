const express = require('express');
const router = express.Router();
const flightsController = require('../../controllers/flightsController')

router
    .get("/", flightsController.getAllFlights)
    .get("/filters", flightsController.getFlightsFilters)
    .post("/", flightsController.createFlights);

module.exports = router;
