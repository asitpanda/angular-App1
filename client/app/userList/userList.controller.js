'use strict';

angular.module('UserProfileApp').controller('UserListCtrl', UserListCtrl);

UserListCtrl.$inject = ['$scope', 'userService', '$uibModal','$compile'];

function UserListCtrl($scope, userService, $uibModal, $compile) {
   var model = {
    nameFilter : null,
    addressFilter : '',
    userList : [],
    adduserDetail : {},
    showAlert : false
  }

  $scope.searchFilter = function (user) {
    var re = new RegExp(model.nameFilter, 'i');
    return !model.nameFilter || re.test(user.fName) || re.test(user.lName);
  };

  $scope.countryName = ['Abkhazia', 'Afghanistan', 'Aland', 'Albania', 'Algeria', 'American-Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua-and-Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Australian', 'Austria', 'Austrian', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Basque-Country', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia-and-Herzegovina', 'Botswana', 'Brazil', 'Brazilian', 'British', 'British-Antarctic-Territory', 'British-Virgin-Islands', 'Brunei', 'Bulgaria', 'Burkina-Faso', 'Burundi', 'Cambodia', 'Canada', 'Canary-Islands', 'Central-African-Republic', 'Chad', 'Chile', 'China', 'Christmas-Island', 'Cocos-Keeling-Islands', 'Colombia', 'Commonwealth', 'Comoros', 'Cook-Islands', 'Costa-Rica', 'Cote-dIvoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech-Republic', 'Democratic-Republic-of-the-Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican-Republic', 'Dutch', 'East-Timor', 'Ecuador', 'Egypt', 'El-Salvador', 'England', 'English', 'Equatorial-Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'European-Union', 'Falkland-Islands', 'Faroes', 'Fiji', 'Finland', 'Finnish', 'France', 'French', 'French-Polynesia', 'French-Southern-Territories', 'Gabon', 'Gambia', 'Georgia', 'German', 'Germany', 'Ghana', 'Gibraltar', 'GoSquared', 'Greece', 'Poland']

  $scope.addUser = function () {
    if(_.isEmpty(model.adduserDetail)) {
      model.showAlert = true;
      return;
    } 
    
    model.adduserDetail.userId = model.userList.length + 1;
    var date = new Date(model.adduserDetail.dob);
    model.adduserDetail.dob = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    model.userList = _.cloneDeep(model.userList);
    model.userList.push(_.cloneDeep(model.adduserDetail));
    model.showAlert = false;
  }

$scope.closeAlert = function(alertType){
  model.showAlert = false;
}

  $scope.searchAddress = function (user) {
    if (!_.include(user.address.toLowerCase(), model.addressFilter.toLowerCase())) return false;
    if (user.userId >= 5 && user.userId <= 15) return true;
  }

  userService.getUserList().then(function (response) {
    model.userList = response.data;
  });

  $scope.getUserDetails = function (selectedUser) {
    modalInstance = $uibModal.open({
      templateUrl: 'app/user/user.html',
      controller: 'userController',
      resolve: {
        userdetail: function () {
          return userService.getUserDetails(selectedUser.userId);
        }
      }
    });
  }

  $scope.getUserProfile = function(uid) {
    var userId = uid || 5;
    userService.getUserDetails(userId).then(function(response){
        $scope.userData = response.data;
        var compiledDirective = $compile('<user-profile user-object="userData"></user-profile>');
        var directiveElement = compiledDirective($scope);
        $('#dynamicUserContent').empty().append(directiveElement);
    });
  }

  $scope.model = model;
};