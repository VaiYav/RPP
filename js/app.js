import angular from 'angular';
import ngRoute from 'angular-route';
import Blog from 'Blog';
import Pagination from 'Pagination'
import Post from 'Post';

import routerSettings from 'app.router.config';
import blogApi from 'api/blogapi'
import 'angular-aria'
import 'angular-animate'
import 'angular-material'
// var angular = require('angular');
// var ngRoute = require('angular-route');

const app = angular.module('application', ['ngRoute']);
app.config(routerSettings);
app.factory('blogApi', ['$http', blogApi]);
app.controller('Blog', ['$scope', 'blogApi', Blog]);
app.controller('Pagination', ['$scope', Pagination]);
app.controller('Post', ['$scope', '$routeParams', 'blogApi', Post]);

// angular.element(function() {
// 	angular.bootstrap(document, ['application']);
// });
// angular.element(document).ready(() => {
// angular.bootstrap(document, ['application'])
// })