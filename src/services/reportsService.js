const model = require('../models/reservation');
const modelFlights = require('../models/flights');
const modelAirline =  require('../models/airline');

const getTopReservations= async () => {
    const reservations = await model.find();

    const reservationWithflightDetails = await Promise.all(reservations.map(async (reservation) => {
        const flight = await modelFlights.findById(reservation.idVuelo);
        return { ...reservation._doc, flight };
      }));

    // Contar las reservas por aerolínea
    const airlineReservationsCount = {};
    reservationWithflightDetails.forEach(reservation => {
      if (!airlineReservationsCount[reservation.flight.idAirline]) {
        airlineReservationsCount[reservation.flight.idAirline] = 1;
      } else {
        airlineReservationsCount[reservation.flight.idAirline]++;
      }
    });

    // Convertir el objeto en un array de pares [idAirline, count]
    const airlineReservationsCountArray = Object.entries(airlineReservationsCount);

    // Ordenar el array por el número de reservas (en orden descendente)
    airlineReservationsCountArray.sort((a, b) => b[1] - a[1]);

    // Obtener los detalles de las aerolíneas con más reservas
    const airlinesWithMostReservations = await Promise.all(airlineReservationsCountArray.map(async ([idAirline, count]) => {
      const airline = await modelAirline.findById(idAirline);
      return { airline, reservationCount: count };
    }));

     // Devolver solo los 5 primeros resultados
     const top5AirlinesWithMostReservations = airlinesWithMostReservations.slice(0, 5);

     return top5AirlinesWithMostReservations;
};

const getCountAirline= async () => {
    const countAirline = await modelAirline.find().count();
    return countAirline;
};

module.exports={
    getTopReservations,
    getCountAirline
}