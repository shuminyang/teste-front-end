(function () {
    'use strict';
    angular.module('iCaseiDesafio').controller('DetailController', DetailController);

    DetailController.$inject = ['$stateParams', '$state', 'YoutubeService'];

    function DetailController($stateParams, $state, YoutubeService) {
        var vm = this;
        var videoId = $stateParams.videoId;

        function load() {
            YoutubeService.searchDetail(videoId).then(function (data) {
                vm.id = data.data.items[0].id;
                vm.info = data.data.items[0].snippet;
                vm.statistics = data.data.items[0].statistics;
            });
        }

        function init() {
            load();
        }

        init();

    }

})();