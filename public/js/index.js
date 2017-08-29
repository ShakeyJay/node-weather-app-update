var socket = io();

socket.on('connect', function () {
  console.log('Connected');
  // socket.emit('test', {
  //   address: 60647
  // });
});

socket.on('disconnect', function () {
  console.log('disconnected');
});

socket.on('weatherUpdate', function (weather) {
  var li = jQuery('<li></li>');
  li.text(`temp: ${weather.temp} and it feels like ${weather.appTemp}`);
  jQuery('#weather').append(li);
});

jQuery('#address-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('test', {
    address: jQuery('[name=address]').val()
  }, function () {

  });

  // socket.emit('test', {
  //   address: jQuery('[name=address]').val()
  // }, function () {
  //
  // });
});
