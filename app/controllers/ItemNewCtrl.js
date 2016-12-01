"use strict";

app.controller('ItemNewCtrl', function($scope, ItemStorage, $location){

	$scope.title = "Add a new task";
	$scope.btnText = "Save new task";
    $scope.newTask = {
    	assignedTo: "",
    	dependencies: "",
    	dueDate: "",
    	location: "",
    	task: "",
    	urgency: "low",
    	isCompleted: false,
    };

    $scope.addNewItem = function() {
        console.log("clicked add new");
        ItemStorage.postNewItem($scope.newTask)
        .then( (response) => {
        	$location.url('/items/list');
        	$scope.$apply();
        });
    };
});