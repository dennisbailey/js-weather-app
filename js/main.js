$(document).ready(function(){
  console.log("READY, PLAYER ONE?");
  
  var settings = {
    "url": "http://jsonip.com/",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    var ipAddress = response.ip;
    
    $('#ip').append(ipAddress);
  });
});

