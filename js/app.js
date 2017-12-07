import angular from 'angular';
import ngRoute from 'angular-route';
import books from 'BooksCtrl';
import inner from 'InnerCtrl';
import main from 'MainCtrl';
import search from 'SearchCtrl';
import routerSettings from 'app.router.config';
// var angular = require('angular');
// var ngRoute = require('angular-route');

const app = angular.module('application', ['ngRoute']);
app.config(routerSettings);
app.controller('Books', ['$scope', books]);
app.controller('Inner', ['$scope', '$rootScope', inner]);
app.controller('Main', ['$scope', '$rootScope', main]);
app.controller('Search', ['$scope', '$rootScope', search]);
// angular.element(function() {
// 	angular.bootstrap(document, ['application']);
// });
// angular.element(document).ready(() => {
// angular.bootstrap(document, ['application'])
// })