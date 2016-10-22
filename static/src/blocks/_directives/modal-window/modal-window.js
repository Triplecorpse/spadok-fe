(function() {
    angular.module('app').controller('modalWindowController', ['$scope', '$http', 'type', 'videos', 'init', 'close', '$sce', 'translations', 'i18nService', 'dataService',
            function ($scope, $http, type, videos, init, close, $sce, translations, i18nService, dataService) {
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

            data.key = 'spadOk';

            if(type === 'reviews') {
                $http.post(`${config.dataServiceUrl}/api/addreview`, data)
                    .then(() => {
                        $scope.headers = translations.modals[i18nService.currentLanguage][type];
                        $scope.type = type;
                        $scope.showMain = false;
                        $scope.showConfirmation = true;
                    })
            } else if (type === 'contacts') {
                sendEmail({ subject: 'Новое сообщение' })
            } else if (type === 'partners') {
                sendEmail({ subject: 'Новое предложение о партнёрстве' })
            } else if (type === 'team') {
                sendEmail({ subject: 'Новое предложение о вступлении в команду' })
            }

            function sendEmail(options) {
                data.subject = options.subject;
                data.source = dataService.page.email;
                $http.post(`${dataService.origin}/sendmail`, data)
                    .then((response) => {
                        $scope.showMain = false;
                        $scope.showConfirmation = true;
                        console.log(response);
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