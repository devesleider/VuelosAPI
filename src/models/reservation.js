const mongoose = require('mongoose');
const reservationSchema = mongoose.Schema(
    {
        "numero_reserva": {
            type: String
        },
        "documento":{
            type: String
        },
        "nombre_cliente": {
            type: String
        },
        "apellido_cliente": {
            type: String
        },
        "idVuelo": {
            type: String
        },
        "fecha_reserva": {
            type: String
        }
    }
);

module.exports = mongoose.model('reservations', reservationSchema);