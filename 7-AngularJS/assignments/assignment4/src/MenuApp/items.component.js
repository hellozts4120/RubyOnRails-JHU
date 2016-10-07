(function () {
'use strict';

  // component is not strictly necessary but suggested in assignment instructions
  angular.module('data')
  .component('items', {
    templateUrl: 'src/templates/items-component.template.html',
    restrict: 'E',
    bindings: {
      items: '<'
    }
  })

})();