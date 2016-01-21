$(document).ready(function(){
  console.log("READY, PLAYER ONE?");
  
  var ipRequest = {
    "url": "http://jsonip.com/",
    "method": "GET"
  }
  
  var locationRequest = {
    "url": "http://freegeoip.net/json/128.177.172.220",
    "method": "GET"
  } 
  
  var ipAddress = '';
  var latitude = '';
  var longitude = '';

    
  $.ajax(ipRequest).done(function(ipResponse) {
    console.log(ipResponse);
    var ipAddress = ipResponse.ip;
    
      $.ajax(locationRequest).done(function(locationResponse) {
      console.log(locationResponse);
      var latitude = locationResponse.latitude;
      var longitude = locationResponse.longitude;
      
      $('#ip').append(ipAddress);
      $('#lat').append(latitude);
      $('#lon').append(longitude); 
    });
    
  });
});

