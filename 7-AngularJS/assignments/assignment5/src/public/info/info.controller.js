(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['info'];
function InfoController(info) {
  this.info = info;
}

})();