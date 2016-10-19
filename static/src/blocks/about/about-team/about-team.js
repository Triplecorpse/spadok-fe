(function() {
    angular
        .module('app')
        .directive('spdAboutTeam', [about]);

    function about () {

        return {
            restrict: "E",
            templateUrl: "./blocks/about/about-team/about-team.html"
        };
    }
})();