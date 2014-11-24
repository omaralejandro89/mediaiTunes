(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', ['$scope', '$http', 'MediaService', DashboardController]);

    /* @ngInject */
    function DashboardController($scope, $http, MediaService) {
        /* jshint validthis: true */
        var vm = this;

        vm.searchTerm = "";
        vm.mediaType = "all";
        vm.filterTerm = "";
        vm.sortProp = "artistName";
        vm.showFlag = false;


        vm.doSearch = function(artist){
            // use the jsonp callback function from the $http service this
            // will get around any limitations for cross-domain scripting.
            if (vm.mediaType=="all");
            console.log(artist);
            $http.jsonp('http://itunes.apple.com/search', {
                params: {
                    'callback': 'JSON_CALLBACK',
                    'term': artist
                }
                // returns a promise. when returned, .then perform action..
            }).then(onSearchComplete, onError); };


        // Get the data out of the response when search succeeds.
        var onSearchComplete = function(response){
            // the response has a few data elements
            // so we will grab all of that.
            vm.mediaResults = response.data.results;
            console.log(vm.mediaResults);
            // we will also store just the songs into
            // a separate variable for the view to iterate
            vm.songs = response.data.results
        };

        // if there's an error, store that for viewing.
        var onError = function(reason){
            vm.error = reason
        };

        vm.playVideo = function(item) {
            vm.showFlag = true;
            vm.url = item.previewUrl;
            if  (item.trackName != null) vm.title = item.trackName
            else vm.title = item.collectionName;

            vm.artist = item.artistName;
        };

        vm.closeVideo = function() {
            vm.showFlag = false;
        };

        vm.activate = activate;
        vm.title = 'DashboardController';

        activate();

        ////////////////

        function activate() {
        }


    }
})();


