var simpletodoApp = angular.module('simpletodoApp', [
	'ngRoute',
	'mobile-angular-ui',
	'simpletodoControllers'
]);

simpletodoApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
			.when('/' , {
				templateUrl: "home.html",
				controller: "HomeCtrl as home"
			})
			.otherwise({
				redirectTo: "/"
			});
	}]);
