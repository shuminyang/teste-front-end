(function () {
    'use strict';

    angular.module('iCaseiDesafio').service('YoutubeService', YTService);

    YTService.$inject = ['$http'];

    function YTService($http) {

        var url_search = 'https://www.googleapis.com/youtube/v3/search';
        var KEY = 'AIzaSyBTo8mOJjxoqYSXEkdIZQdz07ldQndgKaA';

        function buscar(conteudo) {

            var searchParams = {
                part: 'id,snippet',
                q: conteudo,
                key: KEY
            };

            $http({
                method: 'GET',
                url: url_search,
                params: searchParams
            }).then(function (data) {
                console.log('hashahs');
                console.log(data);
            }).then(function (erro) {
                console.log('asdasdasd');
                console.log(erro);
            });

        }

        var service = {
            buscar: buscar
        };

        return service;
    }

})();