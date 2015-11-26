$(function(){
  // API.getSecret().then(function(data){
  //   console.log("yeah" + data);
  // }, errorHandling);
  var id = window.location.pathname.split('/')[2];
  API.getOneBottle(id).then(function(data){
    $('#wineName').val(data.bottle.wineName);
    $('#description').val(data.bottle.description);
    $('#year').val(data.bottle.year);
    $('#quantity').val(data.bottle.quantity);
  }, errorHandling);

  $('#edit-form').on('submit', function (e){
    e.preventDefault();

    var wineName    = $('#wineName').val();
    var description = $('#description').val();
    var year        = $('#year').val();
    var quantity    = $('#quantity').val();

    var params = {
      bottle: {
        wineName:    wineName,
        description: description,
        year:        year,
        quantity:    quantity,
      }
    };

    console.log(params);

    API.updateBottle(id, params).then(function(data){
      window.location.href = "/bottles";
    }, errorHandling);
  })
});




