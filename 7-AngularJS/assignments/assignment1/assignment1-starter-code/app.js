'use strict';
(function () {
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.lunchItems = '';
        $scope.message = '';
        $scope.color = 'white';
        $scope.checkNum = function() {
            var items = $scope.lunchItems.trim().split(',').filter(({length}) => length).length;
            $scope.message = !items ? ($scope.color = 'red', 'Please enter data first!') : ($scope.color = 'green', items < 4 ? 'Enjoy!' : 'Too much!');
        }
    }
})()