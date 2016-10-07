(function () {
  'use strict';

  angular.module('data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$stateParams', 'data'];
  function ItemsController($stateParams, data) {
    var $ctrl = this;

    $ctrl.items = data.menu_items || [];
    $ctrl.categoryShortName = $stateParams.categoryShortName;
    $ctrl.categoryName = (data.category && data.category.name) || '';
  }

})();