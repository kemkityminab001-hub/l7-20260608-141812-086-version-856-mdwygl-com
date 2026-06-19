document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector("[data-menu-button]");
    var mobileMenu = document.querySelector("[data-mobile-menu]");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("open");
        });
    }

    var hero = document.querySelector("[data-hero]");
    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
        var current = 0;

        var showSlide = function (index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("active", slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("active", dotIndex === current);
            });
        };

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                showSlide(Number(dot.getAttribute("data-hero-dot")) || 0);
            });
        });

        if (slides.length > 1) {
            setInterval(function () {
                showSlide(current + 1);
            }, 5200);
        }
    }

    var forms = Array.prototype.slice.call(document.querySelectorAll("[data-search-form]"));
    forms.forEach(function (form) {
        var scope = form.closest("main") || document;
        var cards = Array.prototype.slice.call(scope.querySelectorAll("[data-card]"));
        var searchInput = form.querySelector("[data-search-input]");
        var yearFilter = form.querySelector("[data-year-filter]");
        var typeFilter = form.querySelector("[data-type-filter]");
        var emptyState = scope.querySelector("[data-empty-state]");

        var applyFilter = function () {
            var query = searchInput ? searchInput.value.trim().toLowerCase() : "";
            var year = yearFilter ? yearFilter.value : "";
            var type = typeFilter ? typeFilter.value : "";
            var visible = 0;

            cards.forEach(function (card) {
                var text = (card.getAttribute("data-search") || "").toLowerCase();
                var cardYear = card.getAttribute("data-year") || "";
                var cardType = card.getAttribute("data-type") || "";
                var ok = true;

                if (query && text.indexOf(query) === -1) {
                    ok = false;
                }
                if (year && cardYear !== year) {
                    ok = false;
                }
                if (type && cardType.indexOf(type) === -1) {
                    ok = false;
                }

                card.style.display = ok ? "" : "none";
                if (ok) {
                    visible += 1;
                }
            });

            if (emptyState) {
                emptyState.classList.toggle("show", visible === 0);
            }
        };

        if (searchInput) {
            searchInput.addEventListener("input", applyFilter);
        }
        if (yearFilter) {
            yearFilter.addEventListener("change", applyFilter);
        }
        if (typeFilter) {
            typeFilter.addEventListener("change", applyFilter);
        }
    });
});

function initMoviePlayer(streamUrl) {
    var video = document.getElementById("player");
    var overlay = document.querySelector(".play-overlay");
    var attached = false;

    if (!video || !streamUrl) {
        return;
    }

    var attachStream = function () {
        if (attached) {
            return;
        }

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = streamUrl;
            attached = true;
            return;
        }

        if (window.Hls && window.Hls.isSupported()) {
            var hls = new window.Hls({
                enableWorker: true,
                lowLatencyMode: false
            });
            hls.loadSource(streamUrl);
            hls.attachMedia(video);
            attached = true;
            return;
        }

        video.src = streamUrl;
        attached = true;
    };

    var startPlayback = function () {
        attachStream();
        if (overlay) {
            overlay.classList.add("is-hidden");
        }
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {});
        }
    };

    if (overlay) {
        overlay.addEventListener("click", startPlayback);
    }

    video.addEventListener("click", function () {
        if (video.paused) {
            startPlayback();
        }
    });

    video.addEventListener("play", function () {
        if (overlay) {
            overlay.classList.add("is-hidden");
        }
    });
}
