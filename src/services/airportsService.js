const model =  require('../models/airports')

const getAllAirports= async () => {
    const allAirports = await model.find().sort({ciudad:1});
    return allAirports;
};

module.exports={
    getAllAirports
}