const express = require('express');
const db = require('./config/db')
const v1FlightsRouter = require('./v1/routes/flightsRoutes');
const v1ReservationsRouter = require('./v1/routes/reservationsRoutes');
const v1reportsRouter = require('./v1/routes/reportsRoutes');
const v1airlinesRouter = require('./v1/routes/airlinesRoutes');
const v1airportsRoutes = require('./v1/routes/airportsRoutes');
const cors = require('cors');

const app = express();
const PORT =  process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1/flights", v1FlightsRouter);
app.use("/api/v1/reservations", v1ReservationsRouter);
app.use("/api/v1/reports", v1reportsRouter);
app.use("/api/v1/airlines", v1airlinesRouter);
app.use("/api/v1/airports", v1airportsRoutes);

app.listen(PORT, () => {console.log('Run server ' + PORT)});

db();