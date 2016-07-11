angular.module('F1FeederApp').

  /* Driver controller */
  controller('userController', function($scope, $routeParams, userService) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    userService.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    userService.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races;
    }); 
  });