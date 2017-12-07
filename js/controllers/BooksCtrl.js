// import angular from 'angular';

export default function BooksCtrl($scope){
	var bookModel = {
		title: '',
			author: '',
			date: '',
			rate: 0,
			cost: 0
	};

	$scope.newBook = angular.extend({}, bookModel);

	$scope.sortField = 'cost';
	// $scope.limitNumber = 2;
	$scope.searchString = '';

	$scope.books= [
		{
			title: 'Harry Potter',
			author: 'Joanne Rowling',
			date: '2009-01-01',
			rate: 9,
			cost: 300
		},
		{
			title: 'Lord of the rings',
			author: 'J.R.R. Tolkien',
			date: '1954-07-25',
			rate: 10,
			cost: 150	

		},
		{
			title: 'Pet Sematary',
			author: 'Steven King',
			date: '1983-11-14',
			rate: 3,
			cost: 180	
		},
		{
			title: 'Fight Club',
      		author: 'Chuck Palahniuk',
      		date: '1996-08-17',
      		rate: 9,
      		cost: 250		
		}

	];

	$scope.sortBy = function(field) {
		$scope.sortField = $scope.sortField === field ? '-' + $scope.sortField : field;
	}
	$scope.saveBook = function() {
		$scope.books.push($scope.newBook);
		$scope.newBook = angular.extend({}, bookModel);

		$scope.formNewBook.$setUntouched();
		$scope.formNewBook.$setPristine();


	}
};