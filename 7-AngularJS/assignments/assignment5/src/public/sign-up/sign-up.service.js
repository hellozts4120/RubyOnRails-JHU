(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;

  service.register = function (user) {
    service.user = user;
  };

  service.getInfo = function () {
    return service.user;
  }
}

})();