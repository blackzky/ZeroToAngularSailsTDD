/* jshint esversion: 6 */

(() => {
    'use strict';

    angular.module('SampleApp', [])
        .controller('SampleCtrl', function() {
            var vm = this;

            vm.Add = Add;

            function Add(x, y) {
                return x + y;
            }

            return vm;
        });
})();