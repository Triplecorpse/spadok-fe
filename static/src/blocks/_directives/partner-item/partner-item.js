(function() {
    angular.module('app').directive('spdPartnerItem', ['dataService', function(dataService) {

        return {
            restrict: "E",
            templateUrl: "./blocks/_directives/partner-item/partner-item.html",
            scope: {
                options: "=",
            },
            controller: ['$scope', '$sce', controller]
        };

        function controller($scope, $sce) {
            $scope.buttonHeader = 'interface.directives.partnerItem.expand';
            $scope.itemsLength = $scope.options.displayAchievements.length;
            $scope.items = _.sample(_.map($scope.options.displayAchievements, (element) => {
                return $sce.trustAsHtml(element);
            }), 2);

            $scope.toggle = (event) => {
                event.target.parentElement.parentElement.classList.toggle('maximized');
                $scope.maximized = !$scope.maximized;

                if($scope.maximized) {
                    $scope.buttonHeader = 'interface.directives.partnerItem.contract';
                    $scope.items = _.map($scope.options.displayAchievements, (element) => {
                        return $sce.trustAsHtml(element);
                    });
                } else {
                    $scope.buttonHeader = 'interface.directives.partnerItem.expand';
                    $scope.items = _.sample(_.map($scope.options.displayAchievements, (element) => {
                        return $sce.trustAsHtml(element);
                    }), 2);
                }
            };
        }
    }
    ]);
})();