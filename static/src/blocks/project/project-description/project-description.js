angular.module('app').directive('spdProjectDescription', function () {

    return {
        restrict: "E",
        templateUrl: "./blocks/project/project-description/project-description.html",
        controller: ['$scope', 'dataService', controller],
        link: link
    };

    function controller($scope, dataService) {
        $scope.onReadyGallerySwiper = (swiper) => {

            $scope.prev = swiper.slidePrev;
            $scope.next = swiper.slideNext;

            $scope.slideInfo = `1/${swiper.slides.length}`;
            $scope.showNext = true;

            $scope.$watch(() => swiper.activeIndex, (n) => {
                $scope.slideInfo = `${n + 1}/${swiper.slides.length}`;
                $scope.showPrev = $scope.showNext = true;

                if (n === 0) {
                    $scope.showPrev = false;
                } else if (n === swiper.slides.length - 1) {
                    $scope.showNext = false;
                }
            });
        }
    }
    function link(scope) {

    }
});