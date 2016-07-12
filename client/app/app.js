'use strict';

angular.module('UserProfileApp', [
  'ngRoute',
  'ui.bootstrap'
]).
config(function($routeProvider,$locationProvider) {
  $routeProvider.
  otherwise({redirectTo: '/userList'});
  $locationProvider.html5Mode(true);
});