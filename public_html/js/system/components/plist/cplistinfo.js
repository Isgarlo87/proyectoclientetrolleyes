'use strict';
moduloDirectivas.component('cplistinfo', {
    restrict: 'E',
    bindings: {
        url: '<',
        numpage: '<',
        rpp: '<',
        registers: '<',
        orderparams: '<',
        filterparams: '<',
        searchtext: '='
    },
    templateUrl: 'js/system/components/plist/cplistinfo.html',
    controllerAs: 'pli',
    controller: ['$location', function ($location) {
            var self = this;
            self.doresetorder = function () {
                $location.url(self.url + '/' + self.numpage + '/' + self.rpp + '?' + self.filterparams);
                //$location.url(self.url + '/' + self.numpage + '/' + self.rpp).search('filter', self.filterparams).search('sfilter', self.sfilterparams);
                return false;
            };

            self.doresetfilter = function () {
                $location.url(self.url + '/' + self.numpage + '/' + self.rpp).search('order', self.orderparams);
                return false;
            };

            self.resetClientfilter = function () {
                self.searchText = "";
                return false;
            };
        }]
});
