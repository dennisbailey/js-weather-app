$(document).ready(function(){
  console.log("READY, PLAYER ONE?");
  
  var ipRequest = {
    "url": "http://jsonip.com/",
    "method": "GET"
  }
    
  $.ajax(ipRequest).done(function(ipResponse) {
    console.log(ipResponse);
    var ipAddress = ipResponse.ip;
    
    var locationRequest = {
    "url": "http://freegeoip.net/json/" + ipAddress,
    "method": "GET"
    } 
    
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

