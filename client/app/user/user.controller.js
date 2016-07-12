angular.module('UserProfileApp').

  /* User controller */
  controller('userController', function($scope, $routeParams, userService) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.user = null;

    userService.getUserDetails($scope.id).success(function (response) {
        $scope.user = response; 
    }); 
  });