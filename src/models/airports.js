const mongoose = require('mongoose');
const airportsSchema = mongoose.Schema(
    {
        "nombre": {
            type: String
        },
        "codigo": {
            type: String
        },
        "ciudad": {
            type: String
        }
    }
);

module.exports = mongoose.model('airports', airportsSchema);