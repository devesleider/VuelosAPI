const model =  require('../models/flights')

const getAllFlights= async () => {
    const allFlights = await model.find();
    return allFlights;
};

const getFlightsFilters= async (options) => {
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
            //query.fecha_salida =  /.*${options.fecha_salida}.*/;
        }
        console.log(query);
        const flights = await model.find(query);

        return flights;

        return flights;
    } catch (error) {
        console.error('Error al consultar vuelos:', error);
        throw new Error('Error al consultar vuelos');
    }
};

const createFlight= async (body) => {
    
    const newFlight = new model(body);
    return await newFlight.save();
};

module.exports={
    getAllFlights,
    getFlightsFilters,
    createFlight
}