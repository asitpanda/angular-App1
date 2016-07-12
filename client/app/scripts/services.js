angular.module('UserProfileApp')
  .service('userService', userService);

userService.$inject = ['$http'];

function userService($http) {

  var ergastAPI = {};

  ergastAPI.getUserList = function () {
    return $http.get('api/user');
  }

  ergastAPI.getUserDetails = function (id) {
    return $http('api/user/?uid=' + id);
  }

  return ergastAPI;
};