$(function(){
  API.getSecret().then(function(data){
    console.log("yeah" + data);
  }, errorHandling);

  API.getBoats().then(function(bottles){
    console.log(bottles);
  }, errorHandling);

});