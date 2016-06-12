(function() {
  'use strict';

  angular
    .module('app.menu')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/menu', {
      templateUrl: 'app/menu/menu.html'
    });
  }

})();
