const airlinesService = require('../services/airlinesService');

const getAllAirlines = async (req,res) => {
    const allAirline = await airlinesService.getAllAirlines();
    res.json({status: 'OK', allAirline});
};

module.exports={
    getAllAirlines
}