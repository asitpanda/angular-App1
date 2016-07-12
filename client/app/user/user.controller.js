'use strict';

angular.module('UserProfileApp').controller('userController', userController);

userController.$inject = ['$scope', 'userdetail'];

function userController($scope, userdetail) {
  $scope.user = userdetail.data;
};