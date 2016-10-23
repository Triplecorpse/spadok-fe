(function() {
    angular
        .module('app')
        .directive('spdProjectHeader', ["dataService", "ModalService", function (dataService, ModalService) {

            return {
                restrict: "E",
                templateUrl: "./blocks/project/project-header/project-header.html",
                controller: ["$scope", "$location", controller],
                link: link
            };

            function controller($scope, $location) {
                $scope.href = $location.absUrl();
            }

            function link(scope) {
                scope.user = _.find(dataService.users, (user) => {
                    return user._id === scope.project.project.ownerId;
                });
                if(scope.project.project.picture.indexOf('http') !== 0) {
                    scope.absPicture = dataService.origin + '/' + scope.project.project.picture;
                } else {
                    scope.absPicture = scope.project.project.picture;
                }
                if(scope.project.project.videoUrl) {
                    scope.video = {
                        id: scope.project.project.videoUrl,
                        name: scope.project.project.videoName,
                    };
                }

                scope.gotoVideo = (id) => {
                    var options = {
                        header: '',
                        placeholders: [],
                        action: '',
                        type: 'video',
                        videos: scope.videos,
                        init: scope.video
                    };
                    $('body').addClass('modal-open');
                    scope.isModalShown = true;
                    ModalService.showModal({
                        templateUrl: "./blocks/_directives/modal-window/modal-window.html",
                        controller: "modalWindowController",
                        inputs: options
                    })
                        .then(function(modal) {
                            modal.close.then(function(result) {
                                $('body').removeClass('modal-open');
                                scope.isModalShown = false;
                            });
                        });
                }
            }
        }]);
})();