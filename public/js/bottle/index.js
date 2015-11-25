$(function(){
  // API.getSecret().then(function(data){
  //   console.log("yeah" + data);
  // }, errorHandling);

  API.getBottles().then(function(data){
    data.bottles.forEach(function(bottle){
      $('#index-bottles').append('\
        <div class="well">\
          <ul>\
            <li>Bottle Name: '+ bottle.wineName +' </li>\
            <li>Description: '+ bottle.description +'</li>\
            <li>Year: '+ bottle.year +'</li>\
            <li>Quantity: '+ bottle.quantity +'</li>\
            <li><a href="/bottles/'+ bottle._id +'" class="button btn btn-lg">Edit</a></li>\
            <li><button id="Delete">Delete</button></li>\
          </ul>\
        </div>\
      ')
    })
  }, errorHandling);

});