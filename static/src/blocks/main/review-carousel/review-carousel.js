(function() {
    angular
        .module('app')
        .directive('spdReviewCarousel', [reviewCarousel]);

    function reviewCarousel () {

        return {
            restrict: "E",
            templateUrl: "./blocks/main/review-carousel/review-carousel.html",
            controller: ['$scope', 'dataService', reviewsController],
            controllerAs: 'reviews'
        };

        function reviewsController($scope, dataService) {
            var vm = this;
            $scope.options = {
                type: "reviews"
            };

            vm.reviews = dataService.reviews;

            $scope.onReadyReviewsSwiper = (swiper) => {
                vm.prev = swiper.slidePrev;
                vm.next = swiper.slideNext;
                vm.goto = (index) => {
                    swiper.slideTo(index);
                    $('.review-carousel-bullet').removeClass('review-carousel-bullet-active');
                    $('.review-carousel-bullet').eq(index).addClass('review-carousel-bullet-active');
                };

                swiper.on('onSlideChangeStart', () => {
                    let realIndex;
                    $('.review-carousel-bullet').removeClass('review-carousel-bullet-active');
                    if(swiper.activeIndex === swiper.slides.length - 1) {
                        $('.review-carousel-bullet').eq(0).addClass('review-carousel-bullet-active');
                    } else if(swiper.activeIndex === 0) {
                        $('.review-carousel-bullet').eq(swiper.slides.length - 3).addClass('review-carousel-bullet-active');
                    } else {
                        $('.review-carousel-bullet').eq(swiper.activeIndex - 1).addClass('review-carousel-bullet-active');
                    }

                });
            }
        }
    }
})();