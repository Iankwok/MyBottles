$(function(){

  $('#addBottle').on('click', function(e){
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

    API.createBottle(params).then(function(data){
      window.location.href = "/bottles/" + data.bottle._id;
    }, errorHandling);

  })

});