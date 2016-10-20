angular.module('app').directive('spdProjectStats', [function () {
    return {
        restrict: 'E',
        templateUrl: './blocks/_directives/project-stats/project-stats.html',
        scope: {
            project: '='
        },
        link: link
    }

    function link(scope) {
        
    }

}]);