angular.module('app').filter('spdEnding', ["i18nService", "translations", (i18nService, config) => {

    return (qty, entity, prefix = '') => {
        let data = config.stats[i18nService.currentLanguage][entity];
        let output = '';

        _.each(data, (element) => {
            // console.log(element);
            if(element.ends && handleQtyByEnding(element.ends.split('|'))) {
                output = element.out;
            } else if(element.is && handleQtyByAsIs(element.is.split('|'))) {
                output = element.out;
            }
        });

        function handleQtyByEnding(endings) {
            let isRight = false;
            _.each(endings, (element) => {
                let strQty = String(qty);
                if(String(qty).lastIndexOf(element) === strQty.length - 1) {
                    isRight = true;
                }
            });
            return isRight;
        }

        function handleQtyByAsIs(endings) {
            let isRight = false;
            _.each(endings, (element) => {
                let strQty = String(qty);
                if(String(qty) === element) {
                    isRight = true;
                }
            });
            return isRight;
        }

        return prefix + ' ' + output;
    };
}]);
