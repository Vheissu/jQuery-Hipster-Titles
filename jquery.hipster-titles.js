/*!
 * Hipster Titles
 *
 * Scrolling truncated text headers and whatever else.
 *
 * Version:  1
 * Released: 28-05-2013
 * Source:   https://github.com/Vheissu/jQuery-Hipster-Titles
 * Plugin:   hipstertitle
 * Author:   Dwayne Charrington (dwaynecharrington@gmail.com)
 * License:  MIT Licence
 *           http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2013 Dwayne Charrington.
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
            'titleClass': 'hipster-title'
            'innerClass'    : 'hipster-title-inner',
            'revealSpeed' : 2500,
            'revealFx': 'swing',
            'hideSpeed': 800,
            'hideFx': 'linear'
        }, options);

        $(this).each(function() {

            var $this    = $(this);
            var $inner  = $this.children(":first");

            // For styling
            $this.addClass(''+settings.titleClass+'');

            // No child element, lets add one
            if ($inner.length <= 0) {
                $this.wrapInner("<span class='"+settings.innerClass+"' />");
            } else {
                $inner.addClass(''+settings.innerClass+'');
            }

            // Query for the inner child again
            $inner = $this.children(''+settings.innerClass+'');

            $this.mouseenter(function() {
                var $headingWidth = $this.width();
                var $innerWidth     = $inner.width();

                var subtract = $headingWidth - $innerWidth;

                // Inner is greater than the parent
                if ($innerWidth > $headingWidth) {
                    $inner.animate({
                        left: subtract + 'px'
                    }, setting.revealSpeed, setting.revealFx);
                }
            }).mouseleave(function() {
                $inner.animate({
                    left: "0px"
                }, settings.hideSpeed, settings.hideFx);
            });

        });

    };

})( jQuery );
