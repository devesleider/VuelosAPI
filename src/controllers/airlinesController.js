const airlinesService = require('../services/airlinesService');

/**
 * Controlador para obtener todas las aerolineas.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Objeto JSON con la información de las aerolineas.
 * @throws {Error} Error si no se encuentra aerolineas en la base de datos.
 */
const getAllAirlines = async (req,res) => {
    try {
        const allAirline = await airlinesService.getAllAirlines();
        res.json({status: 'OK', allAirline});
    } catch (error) {
        console.error('Error al obtener las aerolineas:', error);
        res.status(500).send({ status: "Error", message: `Error al obtener las aerolineas: ${error.message}` });
    }
};

module.exports={
    getAllAirlines
}