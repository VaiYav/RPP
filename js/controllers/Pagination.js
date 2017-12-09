export default function Pagination($scope) {
    $scope.newCurrent = 0;
    $scope.default = {
        paginationLinks: 3,
        currentPage: 1
    };
    $scope.pagination = {};
    $scope.selected = 1;
    $scope.current = '';
    $scope.localCurrent = function () {
        let current = $scope.currentPage || $scope.default.currentPage
        return current
    };
    $scope.pagination.paginationLinks = $scope.paginationLinks || $scope.default.paginationLinks
    $scope.links = function () {
        let start = $scope.startPagination()
        let arr = []
        for (let i = 0; i < $scope.pagination.paginationLinks; i++) {
            arr.push(start + i)
        }
        return arr
    };
    $scope.centerPagination = function () {
        return Math.floor($scope.pagination.paginationLinks / 2)
    };
    $scope.startPagination = function () {
        if (($scope.localCurrent() - $scope.centerPagination()) < 1) {
            return 1
        } else if ((($scope.localCurrent() - $scope.centerPagination()) > 0) && (($scope.localCurrent() - $scope.centerPagination()) < ($scope.paginationPageLength() - $scope.pagination.paginationLinks + 1))) {
            return ($scope.localCurrent() - $scope.centerPagination())
        } else {
            return ($scope.paginationPageLength() - $scope.pagination.paginationLinks + 1)
        }
    };
    $scope.endPagination = function () {
        return ($scope.startPagination() + $scope.pagination.paginationLinks - 1)
    };
    $scope.incrementCurrent = function () {
        $scope.newCurrent = $scope.localCurrent() - 1
    };
    $scope.dicrementCurrent = function () {
        $scope.newCurrent = $scope.localCurrent() + 1
    };
    $scope.changeCurrent = function (num) {
        if (num) {
            $scope.newCurrent = num
        }
    };
    $scope.$watch('newCurrent', function () {
        if ($scope.newCurrent !== $scope.localCurrent()) {
            $scope.getNewPage($scope.newCurrent)
        }
    });
    $scope.$watch($scope.selected, function (val) {
        if (val) {
            $scope.selected = 0
            $scope.newCurrent = val
        }
    })
}