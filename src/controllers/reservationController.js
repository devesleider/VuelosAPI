const reservationService = require('../services/reservationService');

const getAllReservations = async (req, res) => {
    try {
        const allReservation = await reservationService.getAllFlights();
        res.json({status: 'OK', reservation: allReservation });
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).send({ status: "Error", message: "Error al obtener los vuelos" });
    }
};

const createReservation = async (req,res) => {
    const createReservations = await reservationService.createReservation(req.body);
    res.json({status: 'OK', reservation: createReservations});
};

module.exports={
    getAllReservations,
    createReservation
}