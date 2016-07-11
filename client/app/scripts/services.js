angular.module('F1FeederApp')
.service('userService', ['$http', function ($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http.get('api/user'); 
    }

    ergastAPI.getDriverDetails = function(id) {
      return $http('api/user/?uid='+ id);
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  }]);