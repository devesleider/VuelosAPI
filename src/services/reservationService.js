const model =  require('../models/reservation')

/**
 * Función para obtener todas las reservas.
 * @returns {Object} Objeto JSON con la información de las reservas.
 */
const getAllReservations= async () => {
    const allReservations = await model.find();
    return allReservations;
};

/**
 * Función para crear la reservas.
 * @returns {Object} Objeto JSON con la información de la reserva creada.
 */
const createReservation= async (body) => {
    const newReservations = new model(body);
    return await newReservations.save();
};

module.exports={
    getAllReservations,
    createReservation
}