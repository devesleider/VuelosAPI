const reportService = require('../services/reportsService');

/**
 * Controlador para obtener las aerolineas con mas reservas.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Objeto JSON con la información de las aerolineas con mas reservas.
 * @throws {Error} Error si no se encuentra aerolineas en la base de datos.
 */
const getTopReservations = async (req, res) => {
    try {
        const allReservation = await reportService.getTopReservations();
        res.json({status: 'OK', reservation: allReservation });
    } catch (error) {
        console.error('Error al obtener las aerolineas:', error);
        res.status(500).send({ status: "Error", message: `Error al obtener las aerolineas: ${error.message}` });
    }
};

/**
 * Controlador para obtener número de aerolineas.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Objeto JSON con el númer aerolineas.
 * @throws {Error} Error si no se encuentra aerolineas en la base de datos.
 */
const getCountAirline = async (req,res) => {
    try {
    const countAirline = await reportService.getCountAirline(req.body);
    res.json({status: 'OK', countAirline});
    } catch(error){
        console.error('Error al obtener las aerolineas:', error);
        res.status(500).send({ status: "Error", message: `Error al obtener las aerolineas: ${error.message}` });
    }
};

module.exports={
    getTopReservations,
    getCountAirline
}