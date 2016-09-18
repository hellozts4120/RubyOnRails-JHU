'use strict';
(function () {
    angular.module('ShoppingList', [])
        .controller('ShoppingBuyController', ShoppingBuyController)
        .controller('ShoppingShowController', ShoppingShowController)
        .service('ShoppingCheckService', ShoppingCheckService);
    ShoppingBuyController.$inject = ['ShoppingCheckService'];
    
    function ShoppingCheckService() {
        var boughtList = [];
        var buyList = [
            {
                name: "MacBook Pro",
                quantity: "20"
            },
            {
                name: "Oculus Rift",
                quantity: "10"
            },
            {
                name: "HTC Vive",
                quantity: "15"
            },
            {
                name: "Dell AlienWare",
                quantity: "5"
            },
            {
                name: "iPhone7",
                quantity: "1"
            }
        ];
        
        this.getList = function () {
            return buyList;
        };
        
        this.getBoughtList = function () {
            return boughtList;
        };
        
        this.isEverythingBought = function () {
            return buyList.length === 0;
        };
        
        this.isNothingBought = function () {
            return boughtList.length === 0;
        };
        
        this.buyItem = function (index) {
            boughtList.push(buyList[index]);
            buyList.splice(index, 1);
        }
    };
    
    function ShoppingBuyController(ShoppingCheckService) {
        var $scope = this;
        $scope.items = ShoppingCheckService.getList();
        $scope.isEmpty = function () {
            return ShoppingCheckService.isEverythingBought();
        };
        $scope.buyItem = function (index) {
            return ShoppingCheckService.buyItem(index);
        };
    };
    
    function ShoppingShowController(ShoppingCheckService) {
        var $scope = this;
        $scope.items = ShoppingCheckService.getBoughtList();
        $scope.isEmpty = function () {
            return ShoppingCheckService.isNothingBought();
        };
    };
})()