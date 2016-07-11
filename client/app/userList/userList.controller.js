angular.module('F1FeederApp').

  /* Drivers controller */
  controller('UserListCtrl', ['$scope', 'userService',function($scope, userService) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

    userService.getDrivers().success(function (response) {
        //Digging into the response to get the relevant data
        $scope.driversList = response;
    });

    $scope.getUserDetails = function (selectedUser) {
      // modalInstance = $uibModal.open({
      //             templateUrl: 'app/controllers/eaFilters/views/importLoadFilesModal.html',
      //             controller: 'importLoadFilesModalInstanceCtrl',
      //             resolve: {
      //                 fileNames: ['$http', function($http) {
      //                     return $http.get('/getAvailableAssetList');
      //                 }]
      //             }
      //         });
      //         modalInstance.result.then(function() {}, function() {
      //             console.log('Modal dismissed at: ' + new Date());
      //         });
    }
  }]);