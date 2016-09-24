(function (angular) {
    'use strict';
    angular.module('NarrowItDownApp')
        .component('foundItems', {
            controller: FoundItemsController,
            templateUrl: 'src/loader/founditems.template.html',
            bindings: {
                foundItems: '<foundItems',
                onRemove: '&'
            }
        });
        
    FoundItemsController.$inject = [];
    
    function FoundItemsController() {
        var $scope = this;
        $scope.order = 'short_name';
        $scope.removeItem = function (item) {
            $scope.onRemove({
                item: item
            })
        }
    };
})(angular);