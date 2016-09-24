(function (angular) {
    'use strict';
    angular.module('NarrowItDownApp')
        .controller('NarrowItDownController', NarrowItDownController);
    
    NarrowItDownController.$inject = ['MenuSearchService','$rootScope'];
    
    function NarrowItDownController(MenuSearchService, $rootScope) {
        var $scope = this;
        
        $scope.searchInput = '';
        $scope.found = [];
        $scope.message = '';
        
        $scope.narrowDown = function () {
            $rootScope.$broadcast('narrow:processing', {on: true});
            MenuSearchService.getMatchedMenuItems(narrow.searchInput).then(function (data) {
                narrow.found = data;

                $rootScope.$broadcast('narrow:processing', {on: false});
                if (!narrow.found.length) {
                    narrow.message = "Nothing found";
                } else {
                    narrow.message = "";
                }
            });
        };
        
        $scope.removeItem = function (index) {
            narrow.found.splice(index, 1);
        };
    }
})(angular);