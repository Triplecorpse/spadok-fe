(function() {
    angular.module('app').controller('modalWindowController', ['$scope', '$http', 'type', 'videos', 'init', 'close', '$sce', 'translations', 'i18nService', function ($scope, $http, type, videos, init, close, $sce, translations, i18nService) {
        $scope.type = type;
        $scope.showMain = true;
        $scope.showConfirmation = false;

        $scope.headers = translations.modals[i18nService.currentLanguage][type];

        $scope.videos = videos;
        $scope.initVideo = init;

        $scope.videoUrl = $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${init.id}`);

        $scope.dismissModal = function(result) {
            $scope.showConfirmation = false;
            $scope.showMain = false;
            close(result);
        };

        $scope.submit = () => {
            var smth = _.map($scope.headers.placeholders, (element) => {
                var elem = {};
                elem[element.key] = element.value;
                return elem;
            });
            var data = _.reduce(smth, (elem1, elem2) => {
                return _.extendOwn(elem1, elem2);
            });
            if(type === 'reviews') {
                $http.post(config.dataServiceUrl + '/api/addreview', data)
                    .then(() => {
                        $scope.headers = translations.modals[i18nService.currentLanguage][type];
                        $scope.type = type;
                        $scope.showMain = false;
                        $scope.showConfirmation = true;
                    })
            }
        };

        $scope.dismissModalByKey = function(event) {
            if(event.ctrlKey && event.keyCode === 13) {
                $scope.submit();
            } else if(($scope.showConfirmation && event.keyCode === 13) || (event.keyCode === 27)) {
                $scope.dismissModal()
            }
        };
    }]);
})();