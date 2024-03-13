const flightsService = require('../services/flightsService');

const getAllFlights = async (req, res) => {
    try {
        const allFlights = await flightsService.getAllFlights();
        res.json({ status: 'OK', flights: allFlights });
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).send({ status: "Error", message: "Error al obtener los vuelos" });
    }
};

const getFlightsFilters = async (req, res) => {
    try {
        const allFlights = await flightsService.getFlightsFilters(req.query);
        res.json({ status: 'OK', flights: allFlights });
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).send({ status: "Error", message: "Error al obtener los vuelos" });
    }
};

const createFlights = async (req, res) => {
    try {
        const createdFlights = await flightsService.createFlight(req.body);
        res.json({ status: 'OK', flight: createdFlights });
    } catch (error) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(400).send({ status: "Error", message: 'El numero de vuelo ya se encuentra registrado' });
        } else {
            res.status(500).send({ status: "Error", message: error.message });
        }
    }
};

module.exports = {
    getAllFlights,
    getFlightsFilters,
    createFlights
}