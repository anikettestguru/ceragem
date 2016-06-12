(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',

      // Third party modules.
      'ngStorage',
	  'imageupload',

	  // Custom modules
	  'app.auth',
	  'app.layout',
	  'app.menu',
	  'app.emp',
    ])
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/login'
    });
  }
})();
