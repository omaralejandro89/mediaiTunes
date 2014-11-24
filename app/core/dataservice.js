
(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('MediaService', ['$http', MediaService]);

    /* @ngInject */
    function MediaService($http) {
        var service = {
            getData: getData,
            getTest: getTest

        };

        return service;

        ////////////////

        function getData(callback){
            $http.get('/https://itunes.apple.com/').
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    callback(data)
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("Error while making HTTP call")
                });
        }

        function getTest() {
            return console.log("Test works!");
        }

    }
})();








