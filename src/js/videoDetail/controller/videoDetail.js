(function () {
    'use strict';
    angular.module('iCaseiDesafio').controller('DetailController', DetailController);

    DetailController.$inject = ['$stateParams', '$state', 'YoutubeService', '$sce'];

    function DetailController($stateParams, $state, YoutubeService, $sce) {
        var vm = this;
        var videoId = $stateParams.videoId;
        var lastState = {
            'lastState': $stateParams.state
        };       

        function load() {
            YoutubeService.searchDetail(videoId).then(function (data) {
                vm.id = data.data.items[0].id;
                vm.info = data.data.items[0].snippet;
                vm.statistics = data.data.items[0].statistics;
                vm.video = 'http://www.youtube.com/embed/' + vm.id;
            });
        }

        vm.onReturn = function () {
            $state.go('main', lastState);
        };

        vm.makeVideoTrust = function(source) {
            return $sce.trustAsResourceUrl(source);
        }

        function init() {
            load();
        }

        init();

    }

})();