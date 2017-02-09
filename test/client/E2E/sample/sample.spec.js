describe('Sample Homepage', function() {
    it('should have a title', function() {
        browser.get('http://localhost:1337');

        expect(browser.getTitle()).toEqual('');
    });
});