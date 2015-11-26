$(function(){
  // API.getSecret().then(function(data){
  //   console.log("yeah" + data);
  // }, errorHandling);

  API.getBottles().then(function(data){
    data.bottles.forEach(function(bottle){
      $('#index-bottles').append('\
        <div class="container-fluid>\
          <div class="row">\
            <div class="col-xs-12 col-sm-offset-2 col-sm-8">\
              <ul class="event-list">\
                <li>\
                  <time>\
                    <span>\
                      <img src="../img/addbottle.jpg" alt="">\
                    </span>\
                  </time>\
                  <div class="info">\
                    <h2>'+ bottle.wineName +' </h2>\
                    <p>Description: '+ bottle.description +'</p>\
                    <p>Year: '+ bottle.year +'</p>\
                    <p>Quantity: '+ bottle.quantity +'</p>\
                    <a href="/bottles/'+ bottle._id +'/edit">\
                    <button class="edit-btn btn btn-warning">Edit</button>\
                    </a>\
                    <button data-id="' + bottle._id + '"class="delete-btn btn btn-danger">Delete</button>\
                  </div>\
                </li>\
              </ul>\
            </div>\
          </div>\
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