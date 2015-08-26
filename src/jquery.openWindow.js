/**
 * Created by xuesongdu on 26/08/15.
 */
(function ($) {

    $.fn.openWindow = function (options) {

        // merge options with defaults
        var opts = $.extend({}, $.fn.openWindow.defaults, options);

        // make sure it is chainable
        return this.click(function(){

            var $this = $(this);

            // get the link
            var href = $this.attr("href");

            // get window group name by data attribute
            var groupName = $this.data("window-group");

            // get window features from options
            //if ( opts.windowSize ) {

                var features = opts.windowSize;
            //}

            // finally call window.open with link, name, window features
            window.open(href,groupName,features);

            // keep the initial window stay
            return false;

        });
    };

    // defaults setting
    $.fn.openWindow.defaults = {

        windowSize : "width=300,height=300,toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100"

    };

}(jQuery));