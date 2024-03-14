const reservationService = require('../services/reservationService');

/**
 * Controlador para obtener todas las reservas.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Objeto JSON con la información de las reservas.
 * @throws {Error} Error si no se encuentra reservas en la base de datos.
 */
const getAllReservations = async (req, res) => {
    try {
        const allReservation = await reservationService.getAllFlights();
        res.json({status: 'OK', reservation: allReservation });
    } catch (error) {
        console.error('Error al obtener las reservas:', error);
        res.status(500).send({ status: "Error", message: `Error al obtener las reservas: ${error.message}` });
    }
};

/**
 * Controlador para crear la reserva.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Objeto JSON con la información de la reserva creada.
 * @throws {Error} Error si no se puede crerar la reserva.
 */
const createReservation = async (req,res) => {
    try {
        const createReservations = await reservationService.createReservation(req.body);
        res.json({status: 'OK', reservation: createReservations});
    } catch (error) {
        console.error('Error al crear la reserva:', error);
        res.status(500).send({ status: "Error", message: `Error al crear la reserva: ${error.message}` });
    }
};

module.exports={
    getAllReservations,
    createReservation
}