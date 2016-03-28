(function() {
  'use strict';

  angular
    .module('fishmcp')
    .directive('titlebar', titlebar);

  /** @ngInject */
  function titlebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/titlebar/titlebar.html',
      scope: {},
      controller: TitlebarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TitlebarController() {
      var vm = this;

        //sync titlebar position
        angular.element('.right-content').scroll(event, function() {
            angular.element('.titlebar').css('top', angular.element('.right-content').scrollTop() + 'px');
        });

    }
  }

})();
