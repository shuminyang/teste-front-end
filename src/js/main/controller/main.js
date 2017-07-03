(function () {
    'use strict';
    angular.module('iCaseiDesafio').controller('MainController', MainController);

    MainController.$inject = ['YoutubeService', '$state'];

    function MainController(YoutubeService, $state) {
        var vm = this;
        var nextPageToken = '';

        vm.onSearch = function () {
            console.log('3');
            YoutubeService.search(vm.lastName, nextPageToken).then(function (data) {
                if (data.status === 200) {
                    vm.videoResult = data.data.items;
                    nextPageToken = data.data.nextPageToken;
                } else {
                    alert('Something went wrong! Youtube Service not working!\n' + data);
                }
            });
        };

        vm.onShowInfo = function (id) {
            console.log('4');
            var param = {};
            param.videoId = id;
            $state.go('videoDetail', param)
        };
    }
})();