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
            <li><a href="/bottles/'+ bottle._id +'/edit" class="button btn btn-lg">Edit</a></li>\
            <li><button data-id="' + bottle._id + '"class="delete-btn btn btn-danger">Delete</button></li>\
          </ul>\
        </div>\
      ')
    })

    bindDelete();
  }, errorHandling);

  // add listener in here
  function bindDelete () {
    $('.delete-btn').one('click', function (e) {
      e.preventDefault();

      var id = $(this).data('id');
      var bottleCard = $(this).parent().parent().parent();

      API.deleteBottle(id).then(function (data){
        bottleCard.remove();
      }, errorHandling);
    })
  }
});