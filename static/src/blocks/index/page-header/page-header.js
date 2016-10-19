(function() {
    angular
        .module('app')
        .directive('spdPageHeader', [pageHeader]);

    function pageHeader () {

        return {
            restrict: "E",
            templateUrl: "./blocks/index/page-header/page-header.html",
            controller: ['$scope', '$location', controller],
            controllerAs: 'header',
            link: link
        };

        function controller($scope, $location) {
            var vm = this;

            vm.gotoIndex = () => {
                $location.url("/");
            };

            vm.isActive = (path) => {
                return $location.path().indexOf(path) > -1;
            };
        }

        function link(scope) {
            $(window).scroll(() => {
                if($(window).scrollTop() > 0) {
                    $('#page-header').addClass('page-header-sticky');
                } else {
                    $('#page-header').removeClass('page-header-sticky');
                }
            });
        }
    }
})();