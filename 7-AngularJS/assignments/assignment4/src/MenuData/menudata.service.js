(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http','$q','$timeout'];
  
  function MenuDataService ($http, $q, $timeout) {
    var service = this;
    var itemList = [];
    var categoryList = [];
    var found = [];

    service.getAllCategories = function() {
      var defered = $q.defer();

      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function (res) {
        categoryList = res.data;
        return categoryList;
      }).catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      var defered = $q.defer();

      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
      }).then(function (res) {
        itemList = res.data;
        return itemList;
      }).catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    };
      
  }

})();
