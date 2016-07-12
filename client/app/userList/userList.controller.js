angular.module('UserProfileApp').

  /* Users controller */
  controller('UserListCtrl', UserListCtrl);

UserListCtrl.$inject = ['$scope', 'userService'];

function UserListCtrl($scope, userService) {
  $scope.nameFilter = null;
  $scope.addressFilter = '';
  $scope.userList = [];
  $scope.searchFilter = function (user) {
    var re = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || re.test(user.fName) || re.test(user.lName);
  };

$scope.adduserDetail = {};

$scope.addUser = function(){
 var date = new Date($scope.adduserDetail.dob);
  $scope.adduserDetail.dob = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
  $scope.userList.push($scope.adduserDetail);
}

  $scope.searchAddress = function (user) {
    if (!_.include(user.address.toLowerCase(), $scope.addressFilter.toLowerCase())) return false;
    if (user.userId >=5 && user.userId<=15) return true;
  }

  userService.getUserList().success(function (response) {
    $scope.userList = response;
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
};