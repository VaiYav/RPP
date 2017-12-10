// import angular from 'angular';
export default function Blog($scope, BlogApi){
    $scope.currentPage = 1;
    $scope.numberOfPosts = 4;
	$scope.blog = [];
	$scope.blogLength = 0;
    $scope.paginationPageLength = function() {
        return Math.ceil($scope.blogLength / $scope.numberOfPosts)
    };
    $scope.getNewPage = function (page) {
    	if (page) {
            $scope.currentPage = page
            $scope.getPage($scope.numberOfPosts, $scope.currentPage)
		}
    }
    $scope.getPage = function (num, id) {
        BlogApi.getBlog(num, id)
            .then(function (response) {
                $scope.blogLength = parseInt(response.headers(['x-total-count']))
				$scope.blog = response.data
                $scope.paginationPageLength()
            })
            .catch(errors => {
                console.log(errors)
            })
	};
    $scope.getPage($scope.numberOfPosts, $scope.currentPage)
};