(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myUser'];
function MyInfoController(myUser) {
  var $ctrl = this;




  if(myUser){

    $ctrl.firstName = myUser.firstName;
    $ctrl.lastName = myUser.lastName;
    $ctrl.email = myUser.email;
    $ctrl.phoneNumber = myUser.phoneNumber;
    $ctrl.menuCode = myUser.menuCode;



    $ctrl.personalDish1 = myUser.personalDish1;
    $ctrl.valoriz = true;
  }else {
    $ctrl.valoriz = false;
  }



}

})();
