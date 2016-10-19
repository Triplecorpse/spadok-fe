(function() {
    angular.module('app').directive('spdSubscription', function () {

            return {
                restrict: "E",
                templateUrl: "./blocks/_shared/subscription/subscription.html",
                controller: [subscriptionController],
                controllerAs: 'subscription',
                link: link
            };

            function subscriptionController() {

            }

            function link() {

            }
        });


})();