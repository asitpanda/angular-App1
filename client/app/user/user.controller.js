'use strict';

angular.module('UserProfileApp').controller('userController', userController);

userController.$inject = ['$scope', 'userdetail'];

function userController($scope, userdetail) {
  $scope.user = userdetail.data;

   var model = {
    edit : false,
    editModeActive : false
  }

  $scope.toggleEditMode = function(){
    model.editModeActive = !model.editModeActive;
  }

  $scope.model = model;
};