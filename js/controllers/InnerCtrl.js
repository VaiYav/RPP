export default function InnerCtrl($scope, $rootScope){
	$scope.message = "Hello, Mother";

	$scope.$on('SearchStringChanged', function(event, data) {
		
		$scope.message = data;
	});

	$scope.send = function() {
		$scope.$emit('SomeEventHappend', {data: '100 elephants'});
	};
};