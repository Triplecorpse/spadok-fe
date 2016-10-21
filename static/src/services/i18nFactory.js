(function() {
    angular.module('app').factory('i18nFactory', ['$q', 'dataService', 'translations', 'i18nService', function ($q, dataService, config, i18nService) {

        return function (options) {
            var deferred = $q.defer();
            var translations;
            dataService.dataQ.promise.then((response) => {
                if (options.key === 'en') {
                    translations = {
                        interface: config.interface.en,
                        projects: setProjectTranslateion('en'),
                        team: setTeamTranslateion('en'),
                        page: setPageDataTranslateion('en'),
                        partners: setPartnerAchievementTranslation('en')
                    };
                    console.log(translations, options.key);
                } else if (options.key === 'ru') {
                    translations = {
                        interface: config.interface.ru,
                        projects: setProjectTranslateion('ru'),
                        team: setTeamTranslateion('ru'),
                        page: setPageDataTranslateion('ru'),
                        partners: setPartnerAchievementTranslation('ru')
                    };
                    console.log(translations, options.key);
                } else if (options.key === 'uk') {
                    translations = {
                        interface: config.interface.uk,
                        projects: setProjectTranslateion('uk'),
                        team: setTeamTranslateion('uk'),
                        page: setPageDataTranslateion('uk'),
                        partners: setPartnerAchievementTranslation('uk')
                    };
                    console.log(translations, options.key);
                }
                deferred.resolve(translations);
            });

            return deferred.promise;
        };

        function setProjectTranslateion(language) {
            let values = _.map(dataService.projects, (element) => {
                let projLangObj = {};
                projLangObj.displayName = element.name[language] || undefined;
                projLangObj.displayShortDescription = element.shortDescription[language] || undefined;
                projLangObj.displayLongDescription = element.longDescription[language] || undefined;
                projLangObj.id = element._id;
                return _.omit(projLangObj, (element) => {
                    return element === undefined;
                });
            });
            let keys = _.map(values, (element) => {
                return `project${element.id}`;
            });
            return _.object(keys, values)
        }

        function setTeamTranslateion(language) {
            let values = _.map(dataService.users, (element) => {
                let userLangObj = {};
                userLangObj.displayName = element.name[language] || undefined;
                userLangObj.displayPosition = element.position[language] || undefined;
                userLangObj.id = element._id;
                return _.omit(userLangObj, (element) => {
                    return element === undefined;
                });
            });
            let keys = _.map(values, (element) => {
                return `user${element.id}`;
            });
            return _.object(keys, values)
        }

        // convert achievements from {achievements: [ {ru: 'ruAch', en: 'enAch'}, ...]} to {displayAchievements: {achievement1: 'ruAch'}, ...}
        // hope maybe sometimes angular-translate will work with arrays
        function setPartnerAchievementTranslation(language) {
            let values = _.map(dataService.partners, (element) => {
                let achievements = {};
                _.each(element.achievements, (element, index) => {
                    //console.log(element);
                    achievements[`achievement${index}`] = element[language];
                });
                achievements.id = element._id;
                return achievements;
            });
            let keys = _.map(values, (element) => {
                let key = `partner${element.id}`;
                delete element.id;
                return key
            });
            return _.object(keys, values)
        }

        function setPageDataTranslateion(language) {
            let pageObj = {}
            _.each(dataService.page, (element, key) => {
                if (typeof element === 'object') {
                    pageObj[`display${key.charAt(0).toUpperCase() + key.slice(1)}`] = element[language] || undefined;
                }
            });
            console.log(pageObj);
            return pageObj;
        }
    }]);
})();