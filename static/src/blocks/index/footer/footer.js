(function() {
    angular.module('app').directive('spdFooter', ["dataService", footer]);

    function footer (dataService) {

        return {
            restrict: "E",
            templateUrl: "./blocks/index/footer/footer.html",
            controller: ['$scope', '$location', footerController],
            controllerAs: 'footer',
            link: link
        };

        function footerController() {
            var vm = this;

            if(new Date().getYear() > 2016) {
                vm.copyright = ` - ${new Date().getYear()}`;
            } else {
                vm.copyright = "";
            }


        }

        function link(scope) {
            scope.email = dataService.page.email;
            scope.phone = dataService.page.phone;

            scope.fb = dataService.page.fb;
            scope.vk = dataService.page.vk;
            scope.instagram = dataService.page.instagram;
        }
    }
})();