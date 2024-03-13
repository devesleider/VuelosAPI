const model =  require('../models/reservation')

const getAllReservations= async () => {
    const allReservations = await model.find();
    return allReservations;
};

const createReservation= async (body) => {
    const newReservations = new model(body);
    return await newReservations.save();
};

module.exports={
    getAllReservations,
    createReservation
}