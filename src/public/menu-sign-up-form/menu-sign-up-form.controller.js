(function () {
"use strict";

angular.module('public')
.controller('MenuFormController', MenuFormController);

MenuFormController.$inject = ['menuForm'];
function MenuFormController(menuForm) {
  var $ctrl = this;


  console.log($ctrl);
  $ctrl.menuForm = menuForm;

  $ctrl.submit = function () {
    $ctrl.completed = true;
  };
}


})();
