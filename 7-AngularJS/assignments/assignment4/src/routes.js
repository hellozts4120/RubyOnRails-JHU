(function () {
  'use strict';

  angular.module('MenuApp')
         .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page, category list page
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/homepage.template.html',
      controller: 'HomePageController as homePage',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    // category items list page
    .state('mainList', {
      url: '/categories/{cataId}',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.cataId);
        }]
      }
    })

    // item detail page
    .state('itemDetail', {
      url: '/item-detail/{itemId}',
      templateUrl: 'src/templates/item-detail.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        item: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItems()
              .then(function (items) {
                return items[$stateParams.itemId];
              });
          }]
      }
    });
  }

})();
