'use strict';

angular.module('UserProfileApp').controller('userController', userController);

userController.$inject = ['$scope', 'userdetail', '$rootScope'];

function userController($scope, userdetail, $rootScope) {

  if (userdetail.data && userdetail.data.dob) {
    userdetail.data.dob = new Date(userdetail.data.dob)
  }

  $scope.user = _.cloneDeep(userdetail.data);
  $scope.showUpdateAction = true;
  var model = {
    edit: false,
    editModeActive: false
  }

  $scope.toggleEditMode = function () {
    model.editModeActive = !model.editModeActive;
  }

  $scope.saveUserDetails = function () {
    var userObj = {

    }
    $rootScope.$emit('userDataChanged', $scope.user);

    model.editModeActive = false;
  }

  $scope.model = model;
};