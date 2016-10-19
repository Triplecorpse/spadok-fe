(function() {
    angular
        .module('app')
        .directive('spdPartners', ['dataService', '$sce', partners]);

    function partners (dataService, $sce) {

        return {
            restrict: "E",
            templateUrl: "./blocks/main/partners/partners.html",
            controller: ['$scope', '$location', partnersController],
            controllerAs: 'partners',
            link: link
        };

        function partnersController($scope, $location) {
            var vm = this;

            $scope.gotoPartners = () => {
                $location.path(`/partners`);
            }
        }

        function link(scope) {
            var partners = _.map(dataService.partners, (element => {
                return $sce.trustAsResourceUrl(element.picture)
            }));
            scope.partners = _.sample(partners, 8)
        }
    }
})();