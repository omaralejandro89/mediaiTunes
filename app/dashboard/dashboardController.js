(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    /* @ngInject */
    function DashboardController() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'DashboardController';

        activate();

        ////////////////

        function activate() {
        }


    }
})();