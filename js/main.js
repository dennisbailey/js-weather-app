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
      
      var forecast = {
        "url": "https://api.forecast.io/forecast/1f20d4933aaab481a0b34eb3559b6d50/39.7713,-105.0499",
        "method": "GET",
        "dataType": "jsonp"
      }
      
        $.ajax(forecast).done(function (forecastResponse) {
          var currentWeather = forecastResponse.currently.summary
          $('#desc').append(currentWeather);
        });
      
      $('#ip').append(ipAddress);
      $('#lat').append(latitude);
      $('#lon').append(longitude);       
    });  
  });
  
  

  
//   var backgroundImageRequest = {
//     "async": true,
//     "crossDomain": true,
//     "url": "http://www.flickr.com/services/feeds/photos_public.gne?tags=hacking&format=json",
//     "method": "GET",
//     "headers": {
//       "cache-control": "no-cache",
//       "postman-token": "efe085e6-aed2-af12-55d4-09421df9f98a"
//     }
// }
// 
//   $.ajax(backgroundImageRequest).done(function (backgroundImageRepsonse) {
//     var bodyImageLink = backgroundImageRepsonse["items"][0]["link"];
//     
//     $('body').css('background-image', url(bodyImageLink));
//     
//   });
  
});

