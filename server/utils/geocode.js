// const request = require('request');
var moment = require('moment');
const request = require('request');

// var geocodeAddress = (latitude, longitude) => {
//   return {
//     url: `https://www.google.com/maps?q=${latitude},${longitude}`,
//     createdAt: moment().valueOf()
//   };
// };


var geocodeAddress = (address, callback) => {
  address = encodeURIComponent(address);
  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address,
    json: true
  }, (error, response, body) => {
    if (error){
      callback('Unable to connect to Google servers');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find any results');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports.geocodeAddress = geocodeAddress;
