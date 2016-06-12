(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', authService);

  function authService() {
    var service = {
      register: register,
      login: login,
      isLoggedIn: isLoggedIn
    };

	/*temporary user created */

	var user = {
		userid: 'aniket',
		role: 'admin',
		fname: 'Aniket',
		lname: 'Sawant'
	};
    return service;

    ////////////

    function register(user) {
	  return user;
    }

    function login(user) {
      return user;
    }

    function isLoggedIn() {
      return user;
    }
  }

})();