(function() {
  'use strict';

  angular
    .module('app.auth')
	.controller('AuthController', ['$scope', '$http', '$location', '$sessionStorage',
		function($scope, $http, $location, $sessionStorage){
			$scope.login = function(user){
				var url = 'http://localhost:8000/user/authenticate' ;

				$http.post(url,
					{
					headers: {
						'Content-Type': 'application/json'
					},
					data: user
					}).success(function (response) {
						if(response.status){
							var data = response.data ;
							if(data.length>0){
								$sessionStorage.user = data[0];
								$scope.user = $sessionStorage.user ;
								$scope.errorMessage = '' ;
								$location.path('/menu');
							}else{
								$scope.errorMessage = 'Invalid email id/ password' ;
							}
						}else{
							$scope.errorMessage = 'Database connection issue' ;
						}
					});
				}
			$scope.logout = function(){
				$scope.user = null;
				$sessionStorage.user = null;
				$location.path('/login');
			}
		}
	]);	  
})();
