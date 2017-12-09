export default function routerSettings($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('')
	$routeProvider
	.when('/', {
		templateUrl: 'js/views/main.html'
	})
	.when('/blog', {
		templateUrl: 'js/views/blog.html',
		controller:'Blog'
	})
	.when('/post/:id', {
		templateUrl: 'js/views/post.html',
		controller: 'Post'
	});
	// $locationProvider.html5Mode({
	//   enabled: true,
	//   requireBase: true
	// });
};