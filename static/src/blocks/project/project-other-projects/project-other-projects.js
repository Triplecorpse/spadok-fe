(function() {
    angular.module('app').directive('spdOtherProjects', ['dataService', function(dataService) {
        return {
            restrict: "E",
            templateUrl: "./blocks/project/project-other-projects/project-other-projects.html",
            controller: ["$scope", controller],
            link: link
        };

        function controller($scope) {
        }

        function link(scope) {
            // var wrapperWidth = $("#project-other-projects-wrapper").width();
            scope.otherProjects = _.shuffle(dataService.projects).slice(0, 3);
        }

    }]);
})();