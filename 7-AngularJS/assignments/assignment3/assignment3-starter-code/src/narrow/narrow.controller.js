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
            MenuSearchService.getMatchedMenuItems($scope.searchInput).then(function (data) {
                $scope.found = data;

                $rootScope.$broadcast('narrow:processing', {on: false});
                if (!$scope.found.length) {
                    $scope.message = "Nothing found";
                } else {
                    $scope.message = "";
                }
            });
        };
        
        $scope.removeItem = function (index) {
            $scope.found.splice(index, 1);
        };
    }
})(angular);