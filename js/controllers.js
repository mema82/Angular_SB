//THE CONTROLLER

var myApp = angular.module('myApp',[]);//Empty array b/c nothing to needed to pass through

//LINKS ABOVE CONTROLLER TO NAMESPACE

myApp.controller('MyController',
function MyController($scope) {
$scope.author = {
'name' : 'Melissa',
'title': 'Student',
'place': 'TIY'
	}
});

//BE SURE TO REMEMBER TO LINK MODULE TO THE APP