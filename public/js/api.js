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

  this.createBottle = function(params){
    var settings = {
      url: this.URL_BASE + "/api/bottles/",
      method: "POST",
      data: params
    }
    var request = $.ajax(settings);
    return request;
  }

  this.updateBottle = function(id, params){
    var settings = {
      url: this.URL_BASE + "/api/bottles/" + id,
      method: "PUT",
      data: params
    }
    var request = $.ajax(settings);
    return request;
  }

  this.deleteBottle = function(id){
    var settings = {
      url: this.URL_BASE + "/api/bottles/" + id,
      method: "DELETE"
    }
    var request = $.ajax(settings);
    return request;
  }

};

var API = new API_WRAPPER();
