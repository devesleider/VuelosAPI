const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://Flights:Medellin2024@flights.n2mulri.mongodb.net/Reservations'

module.exports = () => {
    const connet = () => {
        mongoose.connect(DB_URI)
            .then(() => {
                console.log('Conexión exitosa a MongoDB');
            })
            .catch((err) => {
                console.error('Error al conectarse a MongoDB:', err);
            });
    }

    connet();
}