angular.module('scottJs', ['scottJs.controllers', 'scottJs.directives', 'scottJs.services', 'ui.router', 'ngAnimate'])

.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	});

	$urlRouterProvider.otherwise('/');
});