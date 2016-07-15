'use strict';

angular.module('UserProfileApp').controller('userController', userController);

userController.$inject = ['$scope', 'userdetail', '$rootScope'];

function userController($scope, userdetail, $rootScope) {
  $scope.user = _.cloneDeep(userdetail.data);

   var model = {
    edit : false,
    editModeActive : false
  }

  $scope.toggleEditMode = function(){
    model.editModeActive = !model.editModeActive;
  }

  $scope.saveUserDetails = function(){
    var userObj = {

    }
    $rootScope.$emit('userDataChanged',$scope.user);

    model.editModeActive = false;
  }

  $scope.model = model;
};