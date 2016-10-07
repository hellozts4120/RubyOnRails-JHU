(function () {
  'use strict';

  angular.module('data')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['data'];
  function CategoriesController(data) {
    var $ctrl = this;

    $ctrl.items = data;
  }

})();