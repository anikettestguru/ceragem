(function() {
  'use strict';

  angular
    .module('app.layout')
	.controller('NavController', ['$scope', '$http', '$location', '$sessionStorage', // <- added quotes
		function($scope, $http, $location, $sessionStorage){
			$scope.user = $sessionStorage.user ;
			$scope.logout = function(){
				$scope.user = null;
				$sessionStorage.user = null;
			}
		}
	]);	  
})();