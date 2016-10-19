angular.module('app').directive('spdSubprojects', function () {

    return {
        restrict: "E",
        templateUrl: "./blocks/project/project-subprojects/project-subprojects.html",
        controller: ['$scope', 'dataService', '$location', controller],
    };

    function controller($scope, dataService, $location) {

        $scope.projects = _.filter(dataService.projects, (element) => {
            return element.parentProjectId === $scope.project.project._id;
        });

        $scope.goto = (id) => {
            $location.path(`/project/${id}`);
        }
    }
});