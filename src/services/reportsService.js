const model = require('../models/reservation');
const modelFlights = require('../models/flights');
const modelAirline =  require('../models/airline');


/**
 * Función para obtener las aerolineas con mas reservas.
 * @returns {Object} Objeto JSON con la información las aerolineas.
 */
const getTopReservations= async () => {
    const reservations = await model.find();

    const reservationWithflightDetails = await Promise.all(reservations.map(async (reservation) => {
        const flight = await modelFlights.findById(reservation.idVuelo);
        return { ...reservation._doc, flight };
      }));

    const airlineReservationsCount = {};
    reservationWithflightDetails.forEach(reservation => {
      if (!airlineReservationsCount[reservation.flight.idAirline]) {
        airlineReservationsCount[reservation.flight.idAirline] = 1;
      } else {
        airlineReservationsCount[reservation.flight.idAirline]++;
      }
    });

    const airlineReservationsCountArray = Object.entries(airlineReservationsCount);

    airlineReservationsCountArray.sort((a, b) => b[1] - a[1]);

    const airlinesWithMostReservations = await Promise.all(airlineReservationsCountArray.map(async ([idAirline, count]) => {
      const airline = await modelAirline.findById(idAirline);
      return { airline, reservationCount: count };
    }));

     const top5AirlinesWithMostReservations = airlinesWithMostReservations.slice(0, 5);

     return top5AirlinesWithMostReservations;
};

/**
 * Función para obtener para obtener número de aerolineas.
 * @returns {Object} Objeto JSON con el número de aerolineas.
 */
const getCountAirline= async () => {
    const countAirline = await modelAirline.find().count();
    return countAirline;
};

module.exports={
    getTopReservations,
    getCountAirline
}