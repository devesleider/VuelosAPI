const model =  require('../models/airports')

/**
 * Función para obtener todos los aeropuertos.
 * @returns {Object} Objeto JSON con la información los aeropuertos.
 */
const getAllAirports= async () => {
    const allAirports = await model.find().sort({ciudad:1});
    return allAirports;
};

module.exports={
    getAllAirports
}