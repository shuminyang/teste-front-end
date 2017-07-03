(function() {
    'use strict';
    angular.module('iCaseiDesafio').controller('MainController', MainController);

    MainController.$inject = ['YoutubeService'];

    function MainController(YoutubeService) {
        var vm = this;

        vm.onClick = function() {
            YoutubeService.buscar(vm.lastName);            
        };
        
    }
})();