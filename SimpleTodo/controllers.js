var simpletodoControllers = angular.module('simpletodoControllers', []);

simpletodoControllers.controller('HomeCtrl', HomeCtrl);

function HomeCtrl() {
	this.todolist = [];
	this.addTodo = function() {
		this.todolist.push(this.todo);
		this.todo = "";
	}
}

// simpletodoControllers.controller('HomeCtrl', ['$scope',
// 	function ($scope) {
// 		$scope.todolist = [];
// 		$scope.hoge = "hoge";
// 		$scope.addTodo = function() {
// 			$scope.todolist.push($scope.hoge);
// 			$scope.hoge = "";
// 		}
// 	}]);
