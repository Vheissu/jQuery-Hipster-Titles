/*!
 * Hipster Titles
 *
 * Scrolling truncated text headers and whatever else.
 *
 * Version:  1
 * Released: 28-05-2013
 * Updated: 21-05-2014
 * Source:   https://github.com/Vheissu/jQuery-Hipster-Titles
 * Plugin:   hipstertitle
 * Author:   Dwayne Charrington (dwaynecharrington@gmail.com)
 * License:  MIT Licence
 *           http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2014 Dwayne Charrington.
 *
 * Simple usage:
 *
 * var $headings = $(".thumbnail h4");
 *
 * if ($headings.length) {
 *     $headings.hipstertitle();
 * }
 *
 */
;(function ($, undefined) {

    $.fn.hipstertitle = function(options) {

        var settings = $.extend({
            'revealSpeed' : 5000,
            'revealEasing': 'linear',
            'hideSpeed': 800,
            'hideEasing': 'linear'
        }, options);

        $(this).each(function() {

            var $this    = $(this);
            var $inner  = $this.children(":first");

            // For styling
            $this.addClass("hipster-title");

            // No child element, lets add one
            if ($inner.length <= 0) {
                $this.wrapInner("<span class='hipster-title-inner' />");
            } else {
                $inner.addClass('hipster-title-inner');
            }

            // Query for the inner child again
            $inner = $this.find('.hipster-title-inner');

            $this.mouseenter(function() {
                var $headingWidth = $this.width();
                var $innerWidth     = $inner.width();

                var subtract = $headingWidth - $innerWidth;

                // Get pixel speed for animations instead of using jQuery's non-helpful duration
                var revealSpeed = ($innerWidth / settings.revealSpeed) * settings.revealSpeed;
                var hideSpeed   = ($innerWidth / settings.hideSpeed) * settings.hideSpeed;

                // Inner is greater than the parent
                if ($innerWidth > $headingWidth) {
                    $inner.stop().animate({
                        left: subtract + 'px'
                    }, {
                        duration: revealSpeed,
                        easing: settings.revealEasing
                    });
                }
            }).mouseleave(function() {
                $inner.stop().animate({
                    left: "0px"
                }, {
                    duration: hideSpeed,
                    easing: settings.hideEasing
                });
            });

        });

    };

})( jQuery );
