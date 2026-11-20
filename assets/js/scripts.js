;(function () {
    "use strict";

    var $window = $(window);
    var $document = $(document);

    $window.on("load", function () {
        $(".tb-preloader-wave").fadeOut();
        $("#tb-preloader").delay(200).fadeOut("slow").remove();
    });

    $document.ready(function () {
        $(".js-primary-navigation").menuzord();

        var $navbarSticky = $(".js-navbar-sticky").not(".l-navbar_s-left");
        var navbarHeight = $navbarSticky.height();
        $navbarSticky.sticky({
            className: "l-navbar-wrapper_has-sticky",
            wrapperClassName: "l-navbar-wrapper",
            zIndex: 10000,
            bottomSpacing: 100
        }).on("sticky-end", function () {
            $navbarSticky.parent().height(navbarHeight);
        });

        if ($.fn.flexslider) {
            $window.on("load", function () {
                $(".post-slider").flexslider({
                    animation: "slide"
                });
            });
        }

        if ($.fn.isotope && typeof imagesLoaded === "function") {
            $(".portfolio:not(.portfolio-masonry)").imagesLoaded().progress(function () {
                $(".portfolio:not(.portfolio-masonry)").isotope({
                    itemSelector: ".portfolio-item",
                    layoutMode: "fitRows",
                    filter: "*"
                });
            });
        }

        if ($.fn.magnificPopup) {
            $(".portfolio-gallery").each(function () {
                $(this).find(".popup-gallery").magnificPopup({
                    type: "image",
                    gallery: { enabled: true }
                });
                $(this).find(".popup-gallery2").magnificPopup({
                    type: "image",
                    gallery: { enabled: true }
                });
            });
        }
    });
})();
