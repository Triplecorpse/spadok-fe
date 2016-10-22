(function() {
    angular.module('app').service('dataService', ['$http', '$q', function ($http, $q) {

        //IE10 crunch
        var origin = window.location.protocol + '//' + window.location.host;

        var self = this;
        var dataQ = $q.defer();
        var data = {
            init,
            origin,
            dataQ
        };

        function addDataServiceUrl(relativeUrl) {
            if (relativeUrl && relativeUrl.startsWith('/pmedia?')) {
                return config.dataServiceUrl + relativeUrl;
            } else {
                return relativeUrl;
            }
        }

        function init() {
            var date = new Date();

            function parsePage(list) {
                data.page = list[0];
                console.log(":::: DATASERVICE PAGE DATA ::::", data.page);
            }

            function parsePartners(list) {
                data.partners = _.map(list, (element) => {
                    element.picture = addDataServiceUrl(element.picture);
                    return element;
                });
                console.log(":::: DATASERVICE PARTNERS ::::", data.partners);
            }

            function parseProjects(list) {
                data.projects = _.map(list, (element) => {
                    let days = new Date(element.date) - date;
                    element.days = Math.ceil(days / 86400000);
                    element.isCompleted = (element.days <= 0);

                    element.eur = Math.round(element.money / data.page.currencyRate);
                    element.uah = Math.round(element.money);

                    element.moneyTotalUah = Math.round(element.moneyTotal);
                    element.moneyTotalEur = Math.round(element.moneyTotal  / data.page.currencyRate);

                    element.collectedUah = element.moneyTotalUah - element.uah;
                    element.collectedEur = element.moneyTotalEur - element.eur;

                    element.pictures = _.map(element.pictures, (pictureUrl) => {
                        return addDataServiceUrl(pictureUrl);
                    });

                    element.picture = addDataServiceUrl(element.picture)

                    return element;
                });

                console.log(":::: DATASERVICE PROJECTS ::::", data.projects);
            }

            function parseReviews(list) {
                data.reviews = list;
                console.log(":::: DATASERVICE REVIEWS ::::", data.reviews);
            }

            function parseUsers(list) {
                data.users = _.map(list, (element) => {
                    element.picture = addDataServiceUrl(element.picture);
                    return element;
                });
                console.log(":::: DATASERVICE USERS ::::", data.users);
            }

            return $http.get(`${config.dataServiceUrl}/api/getall`)
                .then((response) => {
                    parsePage(response.data[0]);
                    parsePartners(response.data[1]);
                    parseProjects(response.data[2]);
                    parseReviews(response.data[3]);
                    parseUsers(response.data[4]);
                    dataQ.resolve(response);
                    return response;
                }, (reason) => {
                    return reason;
                });

        }

        return data;
    }]);
})();