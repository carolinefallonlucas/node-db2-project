const express = require('express');

const server = express();
 

const carsRouter = require('./Vehicles/carsRouter');


server.use(express.json()); 

server.use("/api/Vehicles" , carsRouter); 



module.exports = server; 