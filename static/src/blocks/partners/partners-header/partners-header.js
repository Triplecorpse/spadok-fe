(function() {
    angular.module('app').directive('spdPartnersHeader', [function() {

        return {
            restrict: "E",
            templateUrl: "./blocks/partners/partners-header/partners-header.html",
            controller: ["$scope", controller],
            link: link
        };

        function controller($scope) {
        }

        function link(scope) {

        }
    }]);
})();