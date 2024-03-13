const reportService = require('../services/reportsService');

const getTopReservations = async (req, res) => {
    try {
        const allReservation = await reportService.getTopReservations();
        res.json({status: 'OK', reservation: allReservation });
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).send({ status: "Error", message: "Error al obtener los vuelos" });
    }
};

const getCountAirline = async (req,res) => {
    const countAirline = await reportService.getCountAirline(req.body);
    res.json({status: 'OK', countAirline});
};

module.exports={
    getTopReservations,
    getCountAirline
}