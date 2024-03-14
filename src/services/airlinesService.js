const model =  require('../models/airline')

/**
 * Función para obtener todas las aerolineas.
 * @returns {Object} Objeto JSON con la información las aerolineas.
 */
const getAllAirlines= async () => {
    const allAirlines = await model.find().sort({nombre:1});
    return allAirlines;
};

module.exports={
    getAllAirlines
}