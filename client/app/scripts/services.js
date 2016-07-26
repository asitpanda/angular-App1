'use strict';

angular.module('UserProfileApp')
  .service('userService', userService);

userService.$inject = ['$http'];

function userService($http) {

  var userServiceApi = {};

  userServiceApi.getUserList = function () {
     return $http.get('api/user');

// return $http({
//         method: 'jsonp', 
//         url: 'api/user/?callback=JSON_CALLBACK',
//         data: ''
//       })

  }

  userServiceApi.getUserDetails = function (uId) {
    return $http.get('/api/user/' + uId);
  }

  return userServiceApi;
};