(function() {
    angular.module('app').controller('modalWindowController', ['$scope', '$http', 'type', 'videos', 'init', 'close', '$sce', 'config', 'i18nService', function ($scope, $http, type, videos, init, close, $sce, config, i18nService) {
        $scope.type = type;
        $scope.showMain = true;
        $scope.showConfirmation = false;

        $scope.headers = config.modals[i18nService.currentLanguage][type];

        $scope.videos = videos;
        $scope.initVideo = init;

        $scope.videoUrl = $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${init.id}`);

        $scope.dismissModal = function(result) {
            $scope.showConfirmation = false;
            $scope.showMain = false;
            close(result);
        };

        $scope.submit = () => {
            var data = _.reduce(_.map($scope.placeholders, (element) => {
                var elem = {};
                elem[element.key] = element.value;
                return elem;
            }), (elem1, elem2) => {
                return _.extendOwn(elem1, elem2);
            });
            if(type === 'review') {
                $http.post('/api/addreview', data)
                    .then(() => {
                        $scope.header = header;
                        $scope.placeholders = placeholders;
                        $scope.action = action;
                        $scope.type = type;
                        $scope.showMain = false;
                        $scope.showConfirmation = true;
                    })
            }
        };

        $scope.dismissModalByKey = function(event) {
            console.log(event);
            if(event.ctrlKey && event.keyCode === 13) {
                $scope.submit();
            } else if(($scope.showConfirmation && event.keyCode === 13) || (event.keyCode === 27)) {
                $scope.dismissModal()
            }
        };
    }]);
})();