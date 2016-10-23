(function() {
    angular
        .module('app')
        .directive('spdFeedback', ['translations', 'i18nService', 'dataService', '$http', feedback]);

    function feedback (translations, i18nService, dataService, $http) {

        return {
            restrict: "E",
            templateUrl: "./blocks/main/feedback/feedback.html",
            link: link
        };

        function link(scope) {
            scope.$watch(() => i18nService.currentLanguage, (newVal) => {
                scope.placeholders = translations.modals[newVal].contacts.placeholders;
                scope.action = translations.modals[newVal].contacts.action;
            });

            scope.submit = () => {
                var smth = _.map(scope.placeholders, (element) => {
                    var elem = {};
                    elem[element.key] = element.value;
                    return elem;
                });
                var data = _.reduce(smth, (elem1, elem2) => {
                    return _.extendOwn(elem1, elem2);
                });

                data.key = 'spadOk';

                data.subject = 'Новое сообщение';
                data.source = dataService.page.email;
                $http.post(`${dataService.origin}/sendmail`, data)
                    .then((response) => {
                        alert("Сообщение успешно отпарвлено!");
                        console.log(response);
                    })
                
            }
        }
    }
})();