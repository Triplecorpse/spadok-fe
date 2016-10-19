(function() {
    angular
        .module('app')
        .directive('spdAboutHeader', [about]);

    function about () {

        return {
            restrict: "E",
            templateUrl: "./blocks/about/about-header/about-header.html"
        };
    }
})();