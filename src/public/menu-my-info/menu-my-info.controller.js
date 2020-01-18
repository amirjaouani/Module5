(function () {
"use strict";

angular.module('public')
.controller('MenuMyInfoController', MenuMyInfoController);

MenuMyInfoController.$inject = ['menuMyInfo'];
function MenuMyInfoController(menuMyInfo) {
  var $ctrl = this;
  
  $ctrl.menuForm = menuForm;
}


})();
