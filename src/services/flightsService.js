const model = require('../models/flights');
const airportsmodel = require('../models/airports');
const airlinemodel = require('../models/airline');

/**
 * Función para obtener todos los vuelos.
 * @returns {Object} Objeto JSON con la información los vuelos.
 */
const getAllFlights = async () => {
  try {
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
  } catch (error) {
    console.error('Error al consultar vuelos:', error);
    throw new Error('Error al consultar vuelos');
  }

};

/**
 * Función para obtener todos los vuelos que cumplan con los filtros.
 * @param {options} JSON de los filtros.
 * @returns {Object} Objeto JSON con la información los vuelos.

 */
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

/**
 * Función para obtener todos los vuelos que cumplan con los filtros.
 * @param {body} JSON de los datos del vuelo.
 * @returns {Object} Objeto JSON con la información del vuelo creado.
 */
const createFlight = async (body) => {
  const newFlight = new model(body);
  return await newFlight.save();
};

module.exports = {
  getAllFlights,
  getFlightsFilters,
  createFlight
}