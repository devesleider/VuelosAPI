const flightsService = require('../services/flightsService');

const getAllFlights = async (req, res) => {
    try {
        const allFlights = await flightsService.getAllFlights();
        res.json({status: 'OK', flights: allFlights });
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).send({ status: "Error", message: "Error al obtener los vuelos" });
    }
};

// const getFlightsFilters = async (req, res) => {
//     console.log(req.query);
//     try {
//         const allFlights = await flightsService.getFlightsFilters(req.query);
//         res.json({status: 'OK', flights: allFlights });
//     } catch (error) {
//         console.error('Error al obtener los vuelos:', error);
//         res.status(500).send({ status: "Error", message: "Error al obtener los vuelos" });
//     }
// };

const createFlights = async (req,res) => {
    const createdFlights = await flightsService.createFlight(req.body);
    res.json({status: 'OK', flight: createdFlights});
};

module.exports={
    getAllFlights,
    // getFlightsFilters,
    createFlights
}