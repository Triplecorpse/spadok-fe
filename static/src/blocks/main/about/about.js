(function() {
    angular
        .module('app')
        .directive('spdAbout', [about]);

    function about () {

        return {
            restrict: "E",
            templateUrl: "./blocks/main/about/about.html",
            controller: ['$scope', '$location', link]
        };

        function link($scope, $location) {
            $scope.gotoAbout = () => {
                $location.path(`/about`);
            }
        }
    }
})();