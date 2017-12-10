import angular from 'angular'
import ngRoute from 'angular-route'
import {BlogModule} from 'BlogModule'
import routerSettings from 'app.router.config'
import blogApi from 'api/blogapi'
import 'angular-aria'
import 'angular-animate'
import 'angular-material'

angular.module('application', ['ngRoute'])
 .config(routerSettings)
 .factory('blogApi', ['$http', blogApi])
 .controller('Blog', ['$scope', 'blogApi', BlogModule.blog])
 .controller('Pagination', ['$scope', BlogModule.pagination])
 .controller('Post', ['$scope', '$routeParams', 'blogApi', BlogModule.post])

