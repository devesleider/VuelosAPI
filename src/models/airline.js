const mongoose = require('mongoose');
const airlineSchema = mongoose.Schema(
    {
        "nombre": {
            type: String
        }
    }
);

module.exports = mongoose.model('airline', airlineSchema);