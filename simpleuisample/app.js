var simpleuiApp = angular.module('simpleuiApp', [
	'ngRoute',
	'mobile-angular-ui',
	'simpleuiControllers'
]);

simpleuiApp.config(['$routeProvider',
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
