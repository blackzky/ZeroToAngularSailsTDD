/* jshint esversion: 6 */
(() => {
    'use strict';

    describe('Sample Suite ', () => {
        var $controller;

        beforeEach(module('SampleApp'));
        beforeEach(inject(($injector) => {
            $controller = $injector.get('$controller');
        }));


        it('show show that 1 + 1 = 2', () => {
            var SampleCtrl = $controller('SampleCtrl', { $scope: {} });

            var sum = SampleCtrl.Add(1, 1);
            expect(sum).toEqual(2);
        });
    });
})();