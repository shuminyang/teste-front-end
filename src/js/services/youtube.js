(function () {
    'use strict';

    angular.module('iCaseiDesafio').service('YoutubeService', YTService);

    YTService.$inject = ['$http'];

    function YTService($http) {

        var url_search = 'https://www.googleapis.com/youtube/v3/search';
        var KEY = 'AIzaSyBTo8mOJjxoqYSXEkdIZQdz07ldQndgKaA';

        function search(conteudo, pageToken) {
            
            var searchParams = {
                part: 'id,snippet',
                maxResults: 10,
                q: conteudo,
                key: KEY,
                pageToken:pageToken
            };

            return $http({
                method: 'GET',
                url: url_search,
                params: searchParams
            });
        }       

        var service = {
            search: search
        };

        return service;
    }

})();