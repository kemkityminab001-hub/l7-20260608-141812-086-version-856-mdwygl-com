(function () {
    function textOf(card) {
        return [
            card.getAttribute("data-title") || "",
            card.getAttribute("data-region") || "",
            card.getAttribute("data-year") || "",
            card.getAttribute("data-genre") || ""
        ].join(" ").toLowerCase();
    }

    function setupMenu() {
        var button = document.querySelector("[data-menu-toggle]");
        var menu = document.querySelector("[data-mobile-nav]");
        if (!button || !menu) {
            return;
        }
        button.addEventListener("click", function () {
            menu.classList.toggle("is-open");
        });
    }

    function setupHero() {
        var root = document.querySelector("[data-hero]");
        if (!root) {
            return;
        }
        var slides = Array.prototype.slice.call(root.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(root.querySelectorAll("[data-hero-dot]"));
        var current = 0;
        var timer = null;

        function show(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === current);
            });
        }

        function start() {
            if (timer || slides.length < 2) {
                return;
            }
            timer = window.setInterval(function () {
                show(current + 1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                var index = parseInt(dot.getAttribute("data-hero-dot"), 10) || 0;
                show(index);
                stop();
                start();
            });
        });

        root.addEventListener("mouseenter", stop);
        root.addEventListener("mouseleave", start);
        show(0);
        start();
    }

    function setupFilters() {
        var panels = Array.prototype.slice.call(document.querySelectorAll("[data-filter-panel]"));
        panels.forEach(function (panel) {
            var scope = panel.parentElement;
            var input = panel.querySelector("[data-search-input]");
            var category = panel.querySelector("[data-category-filter]");
            var year = panel.querySelector("[data-year-filter]");
            var list = scope.querySelector("[data-movie-list]");
            var empty = scope.querySelector("[data-empty-state]");
            if (!list) {
                return;
            }
            var cards = Array.prototype.slice.call(list.querySelectorAll("[data-movie-card]"));
            var years = [];
            cards.forEach(function (card) {
                var cardYear = card.getAttribute("data-year");
                if (cardYear && years.indexOf(cardYear) === -1) {
                    years.push(cardYear);
                }
            });
            years.sort(function (a, b) {
                return b.localeCompare(a, "zh-CN", { numeric: true });
            });
            if (year && year.options.length <= 1) {
                years.forEach(function (item) {
                    var option = document.createElement("option");
                    option.value = item;
                    option.textContent = item;
                    year.appendChild(option);
                });
            }

            function apply() {
                var keyword = input ? input.value.trim().toLowerCase() : "";
                var categoryValue = category ? category.value : "";
                var yearValue = year ? year.value : "";
                var visible = 0;
                cards.forEach(function (card) {
                    var matchKeyword = !keyword || textOf(card).indexOf(keyword) !== -1;
                    var matchCategory = !categoryValue || card.getAttribute("data-category") === categoryValue;
                    var matchYear = !yearValue || card.getAttribute("data-year") === yearValue;
                    var matched = matchKeyword && matchCategory && matchYear;
                    card.classList.toggle("is-hidden", !matched);
                    if (matched) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.classList.toggle("is-visible", visible === 0);
                }
            }

            if (input) {
                input.addEventListener("input", apply);
            }
            if (category) {
                category.addEventListener("change", apply);
            }
            if (year) {
                year.addEventListener("change", apply);
            }
        });
    }

    window.initMoviePlayer = function (streamUrl) {
        var video = document.querySelector(".js-player-video");
        var cover = document.querySelector(".js-player-cover");
        var hls = null;
        if (!video || !cover || !streamUrl) {
            return;
        }

        function startVideo() {
            cover.classList.add("is-hidden");
            if (hls) {
                video.play().catch(function () {});
                return;
            }
            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                if (!video.src) {
                    video.src = streamUrl;
                }
                video.play().catch(function () {});
                return;
            }
            if (window.Hls && window.Hls.isSupported()) {
                hls = new window.Hls({ enableWorker: true });
                hls.loadSource(streamUrl);
                hls.attachMedia(video);
                hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
                    video.play().catch(function () {});
                });
                return;
            }
            video.src = streamUrl;
            video.play().catch(function () {});
        }

        cover.addEventListener("click", startVideo);
        video.addEventListener("click", function () {
            if (video.paused) {
                startVideo();
            }
        });
    };

    document.addEventListener("DOMContentLoaded", function () {
        setupMenu();
        setupHero();
        setupFilters();
    });
})();
