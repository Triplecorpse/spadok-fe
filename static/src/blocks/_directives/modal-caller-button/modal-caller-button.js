(function() {
    angular.module('app').directive('spdModalCallerButton', ["translations", "i18nService", function (translations, i18nService) {

        return {
            restrict: "E",
            templateUrl: "./blocks/_directives/modal-caller-button/modal-caller-button.html",
            scope: {
                options: "=",
                buttonType: "="
            },
            controller: ['$scope', 'ModalService', controller]
        };

        function controller($scope, ModalService) {
            $scope.options.videos = [];
            $scope.options.init = {};

            $scope.buttonText = translations.modals[i18nService.currentLanguage][$scope.options.type].callerButtonText;

            $scope.openModal = function() {
                var options = angular.copy($scope.options);
                $('body').addClass('modal-open');
                $scope.isModalShown = true;
                ModalService.showModal({
                    templateUrl: "./blocks/_directives/modal-window/modal-window.html",
                    controller: "modalWindowController",
                    inputs: $scope.options
                })
                    .then(function(modal) {
                        modal.close.then(function(result) {
                            $('body').removeClass('modal-open');
                            $scope.isModalShown = false;
                            $scope.options = options;
                            options = undefined;
                        });
                    });

            };
        }
    }
    ]);
})();