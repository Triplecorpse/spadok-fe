angular.module('app').service('i18nService', ['dataService', function (dataService) {

    let langDic = {
        ru: 'rus',
        en: 'eng'
    };
    let currentLanguage;

    return {
        setLanguage,
        currentLanguage
    };

    // code = ru | en
    function setLanguage(code) {
        setAchievements(code);
        setCurrency(code);
        this.currentLanguage = code;
    }

    function setAchievements(code) {
        dataService.partners = _.map(dataService.partners, (element) => {
            element.achievements = element[`${langDic[code]}Achievements`] || element[`rusAchievements`];
            return element;
        });
    }

    function setCurrency(code) {
        if(code === 'ru') {
            dataService.projects = _.map(dataService.projects, (element) => {
                element.money = element.uah;
                element.collected = element.collectedUah;
                element.moneyTotal = element.moneyTotalUah;
                return element;
            })
        } else if(code === 'en') {
            dataService.projects = _.map(dataService.projects, (element) => {
                element.money = element.eur;
                element.collected = element.collectedEur;
                element.moneyTotal = element.moneyTotalEur;
                return element;
            })
        }
    }
}]);