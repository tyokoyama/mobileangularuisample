var simpleuiControllers = angular.module('simpleuiControllers', []);

simpleuiControllers.controller('HomeCtrl', HomeCtrl);

function HomeCtrl() {
	this.style = "";

	this.normal = function() {
		this.style = "";
	}

	this.success = function() {
		this.style = "alert alert-success";
	}

	this.info = function() {
		this.style = "alert alert-info";
	}

	this.warning = function() {
		this.style = "alert alert-warning";
	}

	this.danger = function() {
		this.style = "alert alert-danger";
	}
}
