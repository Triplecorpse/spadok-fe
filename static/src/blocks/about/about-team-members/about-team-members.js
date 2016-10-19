(function() {
    angular
        .module('app')
        .directive('spdAboutTeamMembers', ['dataService', about]);

    function about (dataService) {

        return {
            restrict: "E",
            templateUrl: "./blocks/about/about-team-members/about-team-members.html",
            link: link
        };

        function link(scope) {
            scope.teamMembers = dataService.users;
            scope.options = {
                type: "team"
            }
        }
    }
})();