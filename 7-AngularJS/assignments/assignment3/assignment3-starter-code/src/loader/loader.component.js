(function (angular) {
    'use strict';
    angular.module('loader')
        .component('itemsLoaderIndicator', {
            controller: LoaderController,
            templateUrl: 'src/loader/itemsloaderindicator.template.html'
        });
        
    LoaderController.$inject = ['$rootScope'];
    
    function LoaderController($rootScope) {
        var $scope = this;
        var cancelListener = $rootScope.$on('narrow:processing', function (event, data) {
            $scope.showLoader = data.on ? true : false;
        });
        
        $scope.onDestroy = function () {
            cancelListener();
        }
    };
})(angular);