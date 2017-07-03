(function () {
    'use strict';
    angular.module('iCaseiDesafio').controller('MainController', MainController);

    MainController.$inject = ['YoutubeService', '$state'];

    function MainController(YoutubeService, $state) {
        var vm = this;
        var nextPageToken = '';
        vm.userInput = '';
        vm.classHeight = 'full-height';

        vm.onSearch = function () {            
            YoutubeService.search(vm.userInput, nextPageToken).then(function (data) {
                if (data.status === 200) {                    
                    vm.videoResult = data.data.items;
                    nextPageToken = data.data.nextPageToken;
                } else {
                    alert('Something went wrong! Youtube Service not working!\n' + data);
                }
            });
        };

        vm.onShowInfo = function (id) {            
            var param = {};
            param.videoId = id;
            $state.go('videoDetail', param)
        };

        vm.onInputChange = function() {
            if (vm.userInput != '') {
                vm.classHeight = 'full-height-animate';
            } else {
                vm.classHeight = 'full-height-animate-down';
            }
        };

        function init() {
        }

        init();
    }
})();