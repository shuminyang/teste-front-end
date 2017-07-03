(function () {
    'use strict';
    angular.module('iCaseiDesafio').controller('MainController', MainController);

    MainController.$inject = ['YoutubeService'];

    function MainController(YoutubeService) {
        var vm = this;
        var nextPageToken = '';

        vm.onSearch = function () {            
            YoutubeService.search(vm.lastName, nextPageToken).then(function (data) {
                if (data.status === 200) {
                    vm.videoResult = data.data.items;
                    nextPageToken = data.data.nextPageToken;
                } else {                    
                    alert('Something went wrong! Youtube Service not working!\n' + data);
                }
            });
        };
    }
})();