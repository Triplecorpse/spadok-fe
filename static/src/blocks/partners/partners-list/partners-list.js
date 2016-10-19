(function() {
    angular.module('app').directive('spdPartnersList', ['dataService', function(dataService) {

        return {
            restrict: "E",
            templateUrl: "./blocks/partners/partners-list/partners-list.html",
            controller: ["$scope", controller],
            link: link
        };

        function controller($scope) {

            $scope.options = {
                type: "partners"
            };
        }

        function link(scope) {
            scope.partners = _.groupBy(dataService.partners, function(element, index){
                return Math.floor((index + 1) % 2);
            });
            console.log(dataService.partners);
        }
    }]);
})();