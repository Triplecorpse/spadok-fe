(function() {
    angular
        .module('app')
        .directive('spdVideoCarousel', ['$timeout', 'ModalService', 'dataService', videoCarousel]);

    function videoCarousel ($timeout, ModalService, dataService) {

        return {
            restrict: "E",
            templateUrl: "./blocks/main/video-carousel/video-carousel.html",
            controller: ['$scope', '$location', videoCarouselController],
            controllerAs: "video",
            link: link
        };

        function videoCarouselController($scope, $location) {

            var vm = this;
            
            $scope.spw = window.innerWidth > 992 ?
                3 :
                window.innerWidth > 768 ?
                2 :
                1;
            $scope.centeredSlides = !Boolean($scope.spw % 2);
            $scope.if = true;

            $scope.onReadyVideoSwiper = (swiper) => {
                $scope.prev = swiper.slidePrev;
                $scope.next = swiper.slideNext;
                $scope.goto = (index) => {
                    swiper.slideTo(index);
                    $('.video-carousel-bullet').removeClass('video-carousel-bullet-active');
                    $('.video-carousel-bullet').eq(index).addClass('video-carousel-bullet-active');
                };

                swiper.on('onSlideChangeStart', () => {
                    $('.video-carousel-bullet').removeClass('video-carousel-bullet-active');
                    $('.video-carousel-bullet').eq(swiper.activeIndex).addClass('video-carousel-bullet-active');
                });
            };
            
        }

        function link(scope) {
            scope.videos = _.compact(_.map(dataService.projects, (element) => {
                if(element.isVideoOnMain && element.videoUrl) {
                    return {
                        id: element.videoUrl,
                        name: element.videoName,
                        picture: `http://img.youtube.com/vi/${element.videoUrl}/0.jpg`
                    }
                }
            }));

            scope.gotoVideo = (id) => {
                var options = {
                    header: '',
                    placeholders: [],
                    action: '',
                    type: 'video',
                    videos: scope.videos,
                    init: _.find(scope.videos, (element) => {
                        return element.id === id;
                    })
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
    }
})();