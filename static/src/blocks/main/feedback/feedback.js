(function() {
    angular
        .module('app')
        .directive('spdFeedback', [feedback]);

    function feedback () {

        return {
            restrict: "E",
            templateUrl: "./blocks/main/feedback/feedback.html",
            controller: [feedbackController],
            controllerAs: 'feedback',
            link: link
        };

        function feedbackController() {

        }

        function link() {

        }
    }
})();