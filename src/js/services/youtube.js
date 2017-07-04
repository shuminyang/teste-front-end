(function () {
    'use strict';

    angular.module('iCaseiDesafio').service('YoutubeService', YTService);

    YTService.$inject = ['$http'];

    function YTService($http) {

        var url_search = 'https://www.googleapis.com/youtube/v3/search';
        var video_search = 'https://www.googleapis.com/youtube/v3/videos';
        var KEY = 'AIzaSyBTo8mOJjxoqYSXEkdIZQdz07ldQndgKaA';

        function search(conteudo, pageToken) {

            var searchParams = {
                part: 'id,snippet',
                maxResults: 5,
                q: conteudo,
                key: KEY,
                pageToken: pageToken,
                type: 'video'
            };

            return $http({
                method: 'GET',
                url: url_search,
                params: searchParams
            });
        }

        function searchDetail(videoId) {

            var searchParams = {
                part: 'snippet,statistics',
                id: videoId,
                key: KEY
            };

            return $http({
                method: 'GET',
                url: video_search,
                params: searchParams
            });

        }

        var service = {
            search: search,
            searchDetail: searchDetail
        };

        return service;
    }

})();