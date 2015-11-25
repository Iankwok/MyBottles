$(function(){
  // API.getSecret().then(function(data){
  //   console.log("yeah" + data);
  // }, errorHandling);
  var id = window.location.pathname.split('/')[2];
  console.log(id);
  API.getOneBottle(id).then(function(data){
    console.log(data.bottle.wineName);
    //shows the edit form like create

  }, errorHandling);

});