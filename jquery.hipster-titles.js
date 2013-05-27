/*!
 * Hipster Titles
 *
 * Scrolling truncated text headers and whatever else.
 *
 * Version:  1
 * Released: 27-05-2013
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

    $.fn.hipstertitle = function() {

        $(this).each(function() {

            var $this    = $(this);
            var $inner  = $this.children(":first");

            // For styling
            $this.addClass('hipster-title');

            // No child element, lets add one
            if ($inner.length <= 0) {
                $this.wrapInner("<span class='hipster-title-inner' />");
            } else {
                $inner.addClass('hipster-title-inner');
            }

            $inner = $this.children('.hipster-title-inner');

            $this.mouseenter(function() {
                var $headingWidth = $this.width();
                var $innerWidth     = $inner.width();

                var subtract = $headingWidth - $innerWidth;

                // Inner is greater than the parent
                if ($innerWidth > $headingWidth) {
                    $inner.animate({
                        left: subtract + 'px'
                    }, 2500, "swing");
                }
            }).mouseleave(function() {
                $inner.animate({
                    left: "0px"
                }, 800, "linear");
            });

        });

    };

})( jQuery );
