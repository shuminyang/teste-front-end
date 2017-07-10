(function () {
    'use strict';
    angular.module('iCaseiDesafio').controller('MainController', MainController);

    MainController.$inject = ['YoutubeService', '$state', '$stateParams'];

    function MainController(YoutubeService, $state, $stateParams) {
        var vm = this;
        var nextPageToken = '';
        vm.userInput = '';
        vm.classHeight = 'full-height';

        vm.onSearch = function () {
            YoutubeService.search(vm.userInput, nextPageToken).then(function (data) {
                if (data.status === 200) {
                    vm.videoResult = data.data.items;
                    nextPageToken = data.data.nextPageToken;
                    vm.classHeight = 'full-height-animate';
                } else {
                    alert('Something went wrong! Youtube Service not working!\n' + data);
                }
            });
        };

        vm.onShowInfo = function (id) {
            var state = {};
            var param = {};
            state.nextPageToken = nextPageToken;
            state.userInput = vm.userInput;
            state.videoResult = vm.videoResult;

            param.videoId = id;
            param.state = state;
            $state.go('videoDetail', param)
        };

        vm.onInputChange = function () {
            if (vm.userInput !== '') {
                vm.classHeight = 'full-height-animate';
            } else if (vm.userInput === '' || vm.videoResult.length === 0) {
                vm.classHeight = 'full-height-animate-down';
            }


        };

        function checkState() {
            if ($stateParams.lastState !== undefined) {
                var currentState = $stateParams.lastState;
                nextPageToken = currentState.nextPageToken;
                vm.userInput = currentState.userInput;
                vm.videoResult = currentState.videoResult;
                vm.classHeight = 'full-height-animate';
            }
        }

        function init() {
            checkState();
        }

        init();
    }
})();