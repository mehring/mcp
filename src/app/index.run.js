(function() {
  'use strict';

  angular
    .module('fishmcp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
