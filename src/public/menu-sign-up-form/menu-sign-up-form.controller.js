(function () {
"use strict";

angular.module('public')
.controller('SignUpFormController', SignUpFormController);

SignUpFormController.$inject = ['UserInfoService', 'MenuService'];
function SignUpFormController(UserInfoService, MenuService) {
  var $ctrl = this;

  $ctrl.signUp = function(event){

    event.preventDefault();


    var newUser = {

      firstName: $ctrl.firstName,
      lastName: $ctrl.lastName,
      email: $ctrl.email,
      phoneNumber: $ctrl.phoneNumber,
      menuCode: $ctrl.menuCode
    };



    MenuService.getMenuItems($ctrl.menuCode.toUpperCase())
        .then(function(result) {
          newUser.personalDish1 = result;
          UserInfoService.setUser(newUser);
          $ctrl.registration = true;
        })
        .catch(function(error) {
          $ctrl.registration = false;
        });


  };
}

})();
