'use strict';

angular.module('F1FeederApp', [
  'ngRoute',
  'ui.bootstrap'
]).
config(function($routeProvider,$locationProvider) {
  $routeProvider.
//  when("/drivers", {templateUrl: "views/drivers.html", controller: "driversController"}).
  //when("/drivers/:id", {templateUrl: "views/driver.html", controller: "driverController"}).
  otherwise({redirectTo: '/userList'});
  $locationProvider.html5Mode(true);
});