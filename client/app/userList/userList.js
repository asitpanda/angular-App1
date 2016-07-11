'use strict';

angular.module('F1FeederApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/userList', {
        templateUrl: 'app/userList/userList.html',
        controller: 'UserListCtrl'
      });
  });
