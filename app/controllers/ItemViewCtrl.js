"use strict";

app.controller('ItemViewCtrl', function($scope, ItemStorage, $routeParams){

    ItemStorage.getSingleItem($routeParams.itemId)
    .then( (itemObject) => {
    	$scope.selectedItem = itemObject;
    	$scope.$apply();
    });

});