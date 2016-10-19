angular.module('app').directive('spdDetailedSubprojects', function () {

    return {
        restrict: "E",
        templateUrl: "./blocks/project/project-detailed-subprojects/project-detailed-subprojects.html",
        controller: ['$scope', 'dataService', '$location', controller],
    };

    function controller($scope, dataService, $location) {

        $scope.subprojects = _.filter(dataService.projects, (element) => {
            return (element.parentProjectId === $scope.project.project._id) && (element.isCompleted === false);
        });
    }
});