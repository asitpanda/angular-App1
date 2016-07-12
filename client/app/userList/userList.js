'use strict';

angular.module('UserProfileApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/userList', {
        templateUrl: 'app/userList/userList.html',
        controller: 'UserListCtrl'
      });
  });
