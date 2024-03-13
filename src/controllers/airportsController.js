const airportsService = require('../services/airportsService');

const getAllAirports = async (req,res) => {
    const allAirports = await airportsService.getAllAirports();
    res.json({status: 'OK', allAirports});
};

module.exports={
    getAllAirports
}