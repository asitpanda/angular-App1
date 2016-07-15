angular.module('UserProfileApp').directive('userProfile', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            userObject: '='
        },
        templateUrl: 'app/user/user.html',
        controller: 'userProfileCtrl'
    }
}).controller('userProfileCtrl', userProfileCtrl);

userProfileCtrl.$inject = ['$scope', '$rootScope'];

function userProfileCtrl($scope, $rootScope) {
   $scope.user = $scope.userObject;
   $scope.showUpdateAction = false;
};