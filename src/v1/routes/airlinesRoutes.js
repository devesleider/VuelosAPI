const express = require('express');
const router = express.Router();
const airlinesController = require('../../controllers/airlinesController')

router
    .get("/", airlinesController.getAllAirlines);

module.exports = router;
