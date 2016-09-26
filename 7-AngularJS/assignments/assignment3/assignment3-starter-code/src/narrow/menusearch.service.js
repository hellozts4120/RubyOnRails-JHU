(function (angular) {
    'use strict';
    angular.module('NarrowItDownApp')
        .service('MenuSearchService', MenuSearchService);
    
    MenuSearchService.$inject = ['$http','$q', '$timeout', 'ApiBasePath'];
    
    function MenuSearchService($http, $q, $timeout, ApiBasePath) {
        var itemList = [];
        var found = [];
        
        this.getMatchedMenuItems = function (searchInput) {
            if (!itemList.length) {
                // first time to load...
                return getItemsOnRemote().then(function () {
                    return searchItems(searchInput);
                });
            } else {
                // already loaded...
                return searchItems(searchInput);
            }
        };
        
        function searchItems(searchInput) {
            var res = [];
            var defer = $q.defer();
            searchInput = searchInput.trim().toLowerCase();
            
            $timeout(function () {
                for (var i = 0, len = itemList.length; i < len; i++) {
                    if (angular.isDefined(itemList[i].description) && itemList[i].description.toLowerCase().indexOf(searchInput) !== -1) {
                        res.push(itemList[i]);
                    }
                }
                defer.resolve(res);
            }, 1000);
            
            return defer.promise;
        };
        
        function getItemsOnRemote() {
            return $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json')
            }).then(function (res) {
                itemList = res.data.menu_items;
                return itemList;
            }).catch(function (error) {
                console.error("Meet Error: " + error);
            });
        };
    }
})(angular);