const mongoose = require('mongoose');
const flightSchema = mongoose.Schema(
    {
        "numero_vuelo": {
            type: String,
            unique: [true, 'El numero de vuelo ya existe']
        },
        "idAirline": {
            type: String
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
        "fecha_llegada": {
            type: String
        },
        "precio": {
            type: Number
        }
    }
);

module.exports = mongoose.model('flights', flightSchema);