/**
 * Created by xuesongdu on 16/08/15.
 */

(function($){

    $.fn.openWindow = function (options){

        var opts = $.extend({}, $.fn.openWindow.defaults, options);

        this.click(function(){

            var $this = $(this);

            var href = $this.attr("href");

            var groupName = $this.attr("data-window-group");

            if ( opts.windowSize ) {

                var features = opts.windowSize;
            }

            alert(groupName);

            window.open(href,groupName,features);

            return false;

        });

    }

    $.fn.openWindow.defaults = {

        windowSize : "width=100,height=100,toolbar=yes, scrollbars=yes,resizable=yes,top=100,left=100"

    };

}(jQuery));