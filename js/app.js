import angular from 'angular';
import ngRoute from 'angular-route';
import Blog from 'Blog';
import Pagination from 'Pagination'

import routerSettings from 'app.router.config';
import blogApi from 'api/blogapi'
// var angular = require('angular');
// var ngRoute = require('angular-route');

const app = angular.module('application', ['ngRoute']);
app.config(routerSettings);
app.factory('blogApi', ['$http', blogApi]);

app.controller('Blog', ['$scope', 'blogApi', Blog]);
app.controller('Pagination', ['$scope', 'blogApi', Pagination]);

// angular.element(function() {
// 	angular.bootstrap(document, ['application']);
// });
// angular.element(document).ready(() => {
// angular.bootstrap(document, ['application'])
// })