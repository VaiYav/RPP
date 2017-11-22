var app = angular.module('application',[]);

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.users = [];
	$scope.firstname = '';

	$scope.addUser = function() {
		$scope.users.push( $scope.firstname );
		$scope.firstname = '';
	};

	$scope.deleteUser = function(index) {
		$scope.users.splice(index, 1);
	};

}]);