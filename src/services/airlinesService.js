const model =  require('../models/airline')

const getAllAirlines= async () => {
    const allAirlines = await model.find().sort({nombre:1});
    return allAirlines;
};

module.exports={
    getAllAirlines
}