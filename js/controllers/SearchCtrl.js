export default function SearchCtrl($scope, $rootScope){
	$scope.search = function() {
		$rootScope.$broadcast('SearchStringChanged', $scope.searchString);
	};
};