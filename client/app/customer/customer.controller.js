(function() {
  'use strict';

  angular
    .module('app.emp')
	.controller('EmpController', ['$scope', '$http', '$location', '$sessionStorage',
		function($scope, $http, $location, $sessionStorage){
			getEmpList();
			$scope.addEmployee = function(employee){
				var url = 'http://localhost:8000/user' ;

				$http.post(url,
				{
				headers: {
					'Content-Type': 'application/json'
				},
				data: employee
				}).success(function (response) {
					$scope.empMsg = response.message ;
				});
			}
			$scope.reset = function(){
				$scope.employee = null;
			}
			$scope.formClicked = function(){
				$scope.empMsg = "" ;
			}
			$scope.removeEmployee = function(employee){
				var empurl = 'http://localhost:8000/user/' + employee.email;
				$http.delete(empurl,
				{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
				}).success(function (response) {
					$scope.empMsg = response.message ;
					getEmpList();
				});
			}

			function getEmpList(){
				var empurl = 'http://localhost:8000/employee' ;
				$http.get(empurl,
				{
				headers: {
					'Content-Type': 'application/json'
				}
				}).success(function (response) {
					$scope.emplist = response ;
				});
			}
		}
	]);	  

})();