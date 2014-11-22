/**
 * Created by Omar on 10/12/14.
 */
(function () {

    'use strict';

    angular
        .module('app', [
            //Everybody has access to this
            'app.core',
            //Feature areas
            'app.dashboard'
    ])

        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/home");
            //
            // Now set up the states
            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "app/dashboard/dashboard.html",
                    controller: 'DashboardController as vm'
                });
        });

})();

