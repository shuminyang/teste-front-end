(function () {
    'use strict';

    angular.module('iCaseiDesafio').config(route)

    route.$inject = ['$stateProvider', '$urlRouterProvider'];

    function route($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main', {
            url: '/',
            templateUrl: 'src/js/main/template/template.html',
            controller: 'MainController as vm'
        });

        return $urlRouterProvider.otherwise('/');
    }

})();