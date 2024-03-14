const flightsService = require('../services/flightsService');

/**
 * Controlador para obtener todos los vuelos.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Objeto JSON con la información los vuelos.
 * @throws {Error} Error si no se encuentra vuelos en la base de datos.
 */
const getAllFlights = async (req, res) => {
    try {
        const allFlights = await flightsService.getAllFlights();
        res.json({ status: 'OK', flights: allFlights });
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).send({ status: "Error", message: `Error al obtener los vuelos: ${error}` });
    }
};

/**
 * Controlador para obtener para obtener todos los vuelos que cumplan con los filtros.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Objeto JSON con la información los vuelos.
 * @throws {Error} Error si no se encuentra vuelos en la base de datos con los parametros enviados.
 */
const getFlightsFilters = async (req, res) => {
    try {
        const allFlights = await flightsService.getFlightsFilters(req.query);
        res.json({ status: 'OK', flights: allFlights });
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).send({ status: "Error", message: `Error al obtener los vuelos: ${error.message}` });
    }
};

/**
 * Controlador guardar un vuelo.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Objeto JSON con la información los vuelos.
 * @throws {Error} Error si el numero de vuelo ya existe.
 */
const createFlights = async (req, res) => {
    try {
        const createdFlights = await flightsService.createFlight(req.body);
        res.json({ status: 'OK', flight: createdFlights });
    } catch (error) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(400).send({ status: "Error", message: 'El numero de vuelo ya se encuentra registrado' });
        } else {
            res.status(500).send({ status: "Error", message: `Error al obtener los vuelos: ${error.message}`  });
        }
    }
};

module.exports = {
    getAllFlights,
    getFlightsFilters,
    createFlights
}