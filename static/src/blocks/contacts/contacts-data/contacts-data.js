(function() {
    angular.module('app').directive('spdContactsData', [function() {

            return {
                restrict: "E",
                templateUrl: "./blocks/contacts/contacts-data/contacts-data.html",
                controller: ['$scope', 'dataService', controller],
                link: link
            };

            function controller($scope, dataService) {
                $scope.team = dataService.team;
                $scope.options = {
                    type: "contacts"
                };
            }

            function link() {

            }
        }]);
})();