export default function routerSettings($routeProvider, $locationProvider) {
	// $locationProvider.hashPrefix('')
	$routeProvider
	.when('/', {
		templateUrl: 'js/views/main.html'
	})
	.when('/blog', {
		templateUrl: 'js/views/blog.html',
		controller:'Blog'
	});
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
};