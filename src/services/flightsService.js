const model = require('../models/flights');
const airportsmodel = require('../models/airports');
const airlinemodel = require('../models/airline');

const getAllFlights = async () => {
  const allFlights = await model.find();
  const flightsWithAirlineDetails = await Promise.all(allFlights.map(async (flight) => {
    const airline = await airlinemodel.findById(flight.idAirline);
    return { ...flight._doc, airline };
  }));

  const flightsWithOriginDetails = await Promise.all(flightsWithAirlineDetails.map(async (flight) => {
    const origin = await airportsmodel.findById(flight.origen);
    return { ...flight, origin };
  }));

  const flightsWithDestinationDetails = await Promise.all(flightsWithOriginDetails.map(async (flight) => {
    const destination = await airportsmodel.findById(flight.destino);
    return { ...flight, destination };
  }));

  return flightsWithDestinationDetails;

};

const getFlightsFilters = async (options) => {
  try {
    let query = {};
    if (options.origen) {
      query.origen = options.origen;
    }
    if (options.destino) {
      query.destino = options.destino;
    }
    if (options.fecha_salida) {
      query.fecha_salida = {
        $regex: options.fecha_salida
      };

    }
    if (options.fecha_llegada) {
      query.fecha_llegada = {
        $regex: options.fecha_llegada
      };

    }
    const flights = await model.find(query);
    const flightsWithAirlineDetails = await Promise.all(flights.map(async (flight) => {
      const airline = await airlinemodel.findById(flight.idAirline);
      return { ...flight._doc, airline };
    }));

    const flightsWithOriginDetails = await Promise.all(flightsWithAirlineDetails.map(async (flight) => {
      const origin = await airportsmodel.findById(flight.origen);
      return { ...flight, origin };
    }));

    const flightsWithDestinationDetails = await Promise.all(flightsWithOriginDetails.map(async (flight) => {
      const destination = await airportsmodel.findById(flight.destino);
      return { ...flight, destination };
    }));

    return flightsWithDestinationDetails;
  } catch (error) {
    console.error('Error al consultar vuelos:', error);
    throw new Error('Error al consultar vuelos');
  }
};

const createFlight = async (body) => {

  const newFlight = new model(body);
  return await newFlight.save();
};

module.exports = {
  getAllFlights,
  getFlightsFilters,
  createFlight
}