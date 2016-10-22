(function() {
    angular.module('app').directive('spdContactsData', ['dataService', function(dataService) {

            return {
                restrict: "E",
                templateUrl: "./blocks/contacts/contacts-data/contacts-data.html",
                controller: ['$scope', 'dataService', controller],
                link: link
            };

            function controller($scope, dataService) {
                $scope.team = dataService.team;
                $scope.email = dataService.page.email;
                $scope.phone = dataService.page.phone;
                $scope.options = {
                    type: "contacts"
                };
            }

            function link() {

            }
        }]);
})();