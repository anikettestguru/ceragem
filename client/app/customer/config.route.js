(function() {
  'use strict';

  angular
    .module('app.emp')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/emp', {
      templateUrl: 'app/emp/empadd.html',
      controller: 'EmpController'
    }).when('/emplist', {
      templateUrl: 'app/emp/emplist.html',
      controller: 'EmpController'
    });
  }

})();
