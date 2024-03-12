const express = require('express');
const db = require('./config/db')
const v1FlightsRouter = require('./v1/routes/flightsRoutes');

const app = express();
const PORT =  process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/flights", v1FlightsRouter);

app.listen(PORT, () => {console.log('Run server ' + PORT)});

db();