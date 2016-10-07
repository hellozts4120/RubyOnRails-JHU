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
      onEnter: ['$window', '$timeout', function($window, $timeout) {  // update page title via $window service
        $timeout(function () { // necessary for proper history handling
          $window.document.title = "Menu App - Home";
        }, 0);
      }]
    })

    // categories page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      },
      onEnter: ['$window', '$timeout', function($window, $timeout) { 
        $timeout(function () {
          $window.document.title = "Menu App - Categories";
        }, 0);
      }]
    })

    // category items list page
    .state('category', {
      url: '/categories/{cataId}',
      templateUrl: 'src/templates/items.template.html',
      controller: 'ItemsController as categories',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.cataId);
        }]
      },
      onEnter: ['$window', '$timeout', '$stateParams', '$state', function($window, $timeout, $stateParams, $state) {  // update page title via $window service
        $state.current.pageTitle = 'CATEGORY ' + $stateParams.cataId;
        $timeout(function () {
          $window.document.title = "Menu App - Category " + $stateParams.cataId;
        }, 0);
      }]
    });

  }

})();
