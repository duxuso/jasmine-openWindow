/**
 * Created by xuesongdu on 26/08/15.
 */
describe("jQuery.openWindow", function () {

    var fix;
    beforeEach(function () {
        fix = $(readFixtures('fixtures.html'));
    });

    it("should be available on the jQuery object", function () {
        expect($.fn.openWindow).toBeDefined();
    });

    it("should be chainable", function () {
        expect(fix.openWindow()).toBe(fix);
    });

    it("offers a defaults object on the openWindow namespace", function () {
        expect($.fn.openWindow.defaults).toBeDefined();
    });

    // makes clicking on those elements open the link target in a new window
    it("should open a link target in a new window",
        inject(function ($window) {

            spyOn($window,'open').and.callFake(function () {return true;});
            fix.openWindow();
            expect($window.open).toHaveBeenCalled();
            expect($window.open).toHaveBeenCalledWith("http://www.google.com");

    }));



    // Ensure that links with the same data­window­group open in the same window
    it("should open links with the same data-window-group in the same window", function () {


    });


    // Take an option object used to set the features on the new window (size, position, scrollbars, etc.)
    it("should accept option to set window features", function () {


    })

});