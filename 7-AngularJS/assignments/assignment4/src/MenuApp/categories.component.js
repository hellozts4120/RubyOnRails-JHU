(function () {
  'use strict';

  // component is not strictly necessary but suggested in assignment instructions
  angular.module('data')
  .component('categories', {
    templateUrl: 'src/templates/categories-component.template.html',
    bindings: {
      items: '<'
    }
  })

})();