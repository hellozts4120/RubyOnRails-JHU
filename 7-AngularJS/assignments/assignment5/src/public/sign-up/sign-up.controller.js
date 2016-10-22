(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'SignUpService'];
function SignUpController(MenuService, SignUpService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    MenuService.getMenuItem($ctrl.user.favorite).then(function (result) {
      $ctrl.user.menuItem = result;
      if ($ctrl.user.menuItem == null) {
        $ctrl.exist = false;
      } else {
        $ctrl.exist = true;
        SignUpService.register($ctrl.user);
      }
    });
  };
}

})();