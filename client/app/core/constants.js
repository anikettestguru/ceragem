(function() {
  'use strict';

	angular
    .module('app.core')
    .constant('BASE_URL', 'https://torrid-heat-913.firebaseio.com/')
    .constant('PROTECTED_PATHS', ['/waitlist']);

})();
 
/* https://waitandeat-v2-demo.firebaseio.com/ */
