export default function routerSettings($routeProvider, $locationProvider) {
	// $locationProvider.hashPrefix('')
	$routeProvider
	.when('/', {
		templateUrl: 'js/views/main.html'
	})
	.when('/books', {
		templateUrl: 'js/views/books.html',
		controller:'Books'
	});
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
};