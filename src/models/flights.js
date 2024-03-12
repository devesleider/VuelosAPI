const mongoose =  require('mongoose');
const flightSchema = mongoose.Schema(
    {
            "numero_vuelo": {
                type: String,
                unique: true
            },
            "origen": {
                type: String
            },
            "destino": {
                type: String
            },
            "fecha_salida": {
                type: String
            },
            "fecha_llegada":{
                type: String
            },
            "capacidad_maxima":{
                type: Number
            },
            "estado": {
                type: String
            }
    }
);

module.exports = mongoose.model('Flights', flightSchema);