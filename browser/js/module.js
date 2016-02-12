'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($urlRouterProvider,$locationProvider){

	$locationProvider.html5Mode(true);
	$urlRouterProvider.when('/', '/albums');
	$urlRouterProvider.when('/artists/:artistId', '/artists/:artistId/albums')
})
