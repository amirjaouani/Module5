(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;

  var newUser;
  service.setUser = function (user) {

    newUser = {

      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      menuCode: user.menuCode,
      personalDish1: user.personalDish1
    }
  };


  service.getUser = function () {

    return newUser;
  };

}



})();
