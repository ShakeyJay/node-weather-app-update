const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
// const geocode = require('./utils/geocode.js');
// const weather = require('./utils/weather.js');

const {geocodeAddress} = require('./utils/geocode')
const {getWeather} = require('./utils/weather');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// This is when a user connects to website/server
io.on('connection', (socket) => {

    // Do this but get the data from the apis???
    socket.emit('weatherUpdate', {
      temp: 76;
      feels: 77;
    });

    socket.on('disconnect', () => {

    });
});

app.use(express.static(publicPath));






// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(results.address);
//     weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
//       if (errorMessage) {
//         console.log(errorMessage);
//       } else {
//         // Change this to sentences..
//         console.log(JSON.stringify(weatherResults, undefined, 2));
//       }
//     });
//   }
// });




server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
