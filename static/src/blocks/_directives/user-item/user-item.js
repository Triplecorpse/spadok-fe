angular.module('app').directive('spdUserItem', ['dataService', function (dataService) {
    return {
        restrict: 'E',
        templateUrl: "./blocks/_directives/user-item/user-item.html",
        scope: {
            user: "="
        },
        link: link
    }

    function link(scope) {
        scope.showContacts = () => {
            scope.isContactShown = true;
        }
    }
}])