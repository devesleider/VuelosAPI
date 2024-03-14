const airportsService = require('../services/airportsService');

/**
 * Controlador para obtener todas los aeropuertos.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Objeto JSON con la información los aeropuertos.
 * @throws {Error} Error si no se encuentra aeropuertos en la base de datos.
 */
const getAllAirports = async (req,res) => {
    try {
        const allAirports = await airportsService.getAllAirports();
        res.json({status: 'OK', allAirports});
    } catch (error) {
        console.error('Error al obtener los aeropuertos:', error);
        res.status(500).send({ status: "Error", message: `Error al obtener los aeropuertos: ${error.message}` });
    }
    
};

module.exports={
    getAllAirports
}