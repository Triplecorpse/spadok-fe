(function() {
    angular.module('app').directive('spdContactsMap', ['dataService', function(dataService) {

        return {
            restrict: "E",
            templateUrl: "./blocks/contacts/contacts-map/contacts-map.html",
            controller: ["$scope", controller],
            link: link
        };

        function controller($scope) {
        }

        function link(scope) {
        }
    }]);
})();