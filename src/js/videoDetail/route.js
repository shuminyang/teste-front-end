(function () {
    'use strict';

    angular.module('iCaseiDesafio').config(route)

    route.$inject = ['$stateProvider', '$urlRouterProvider'];

    function route($stateProvider, $urlRouterProvider) {
        $stateProvider.state('videoDetail', {
            url: '/videoDetail',
            templateUrl: 'src/js/videoDetail/template/template.html',
            controller: 'DetailController as vm',
            params: { 'videoId': undefined }
        });

        return $urlRouterProvider.otherwise('/');
    }

})();