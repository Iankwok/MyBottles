var API_WRAPPER = function(){
  this.URL_BASE = window.location.origin;

  this.getSecret = function(){
    return $.ajax({
      url: this.URL_BASE + "/secret",
      method: "GET"
    });
  };

  this.getBottles = function(){
    return $.ajax({
      url: this.URL_BASE + "/api/bottles",
      method: "GET"
    });
  }

  this.getOneBottle = function(id){
    return $.ajax({
      url: this.URL_BASE + "/api/bottles/" + id,
      method: "GET"
    });
  }


};

var API = new API_WRAPPER();
