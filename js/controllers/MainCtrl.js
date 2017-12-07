export default function MainCtrl($scope, $rootScope){
	$scope.message = "Hello";

	$scope.$on('SomeEventHappend', function(event, data) {
		console.log(data);
	})
};