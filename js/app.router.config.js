export default function routerSettings($routeProvider, $locationProvider) {
	// $locationProvider.hashPrefix('')
	$routeProvider
	.when('/', {
		templateUrl: 'js/views/main.html'
	})
	.when('/blog', {
		templateUrl: 'js/views/blogViews/blog.html',
		controller:'Blog'
	})
	.when('/post/:id', {
		templateUrl: 'js/views/blogViews/post.html',
		controller: 'Post'
	})
	.when('/blog/:id', {
		templateUrl: 'js/views/blogViews/blog.html',
		controller: 'Blog'
	})
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	})
};