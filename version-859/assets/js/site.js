(function() {
    function bySelector(selector, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    }

    function normalize(value) {
        return String(value || "").trim().toLowerCase();
    }

    function setupMobileMenu() {
        var button = document.querySelector("[data-menu-button]");
        var panel = document.querySelector("[data-mobile-panel]");
        if (!button || !panel) {
            return;
        }
        button.addEventListener("click", function() {
            panel.classList.toggle("is-open");
        });
    }

    function setupHero() {
        var hero = document.querySelector("[data-hero]");
        if (!hero) {
            return;
        }
        var slides = bySelector(".hero-slide", hero);
        var dots = bySelector(".hero-dot", hero);
        var panel = hero.querySelector("[data-hero-panel]");
        var title = hero.querySelector("[data-hero-title]");
        var desc = hero.querySelector("[data-hero-desc]");
        var link = hero.querySelector("[data-hero-link]");
        var badges = hero.querySelector("[data-hero-badges]");
        var index = 0;
        var timer;

        function render(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function(slide, i) {
                slide.classList.toggle("is-active", i === index);
            });
            dots.forEach(function(dot, i) {
                dot.classList.toggle("is-active", i === index);
            });
            var active = slides[index];
            if (panel) {
                panel.style.setProperty("--panel-image", active.style.getPropertyValue("--hero-image"));
            }
            if (title) {
                title.textContent = active.dataset.title || "";
            }
            if (desc) {
                desc.textContent = active.dataset.desc || "";
            }
            if (link) {
                link.href = active.dataset.link || "./movies.html";
            }
            if (badges) {
                var items = (active.dataset.badges || "").split("|").filter(Boolean).slice(0, 4);
                badges.innerHTML = items.map(function(item) {
                    return "<span>" + item.replace(/[&<>\"]/g, function(ch) {
                        return {"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"}[ch];
                    }) + "</span>";
                }).join("");
            }
        }

        function start() {
            stop();
            timer = window.setInterval(function() {
                render(index + 1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        dots.forEach(function(dot, i) {
            dot.addEventListener("click", function() {
                render(i);
                start();
            });
        });

        hero.addEventListener("mouseenter", stop);
        hero.addEventListener("mouseleave", start);

        if (slides.length) {
            render(0);
            start();
        }
    }

    function setupFilters() {
        bySelector("[data-filter-scope]").forEach(function(scope) {
            var panel = scope.querySelector("[data-filter-panel]");
            var cards = bySelector(".movie-card", scope);
            var empty = scope.querySelector("[data-empty-state]");
            if (!panel || !cards.length) {
                return;
            }

            var search = panel.querySelector("[data-filter-search]");
            var region = panel.querySelector("[data-filter-region]");
            var type = panel.querySelector("[data-filter-type]");
            var year = panel.querySelector("[data-filter-year]");

            function apply() {
                var q = normalize(search && search.value);
                var selectedRegion = normalize(region && region.value);
                var selectedType = normalize(type && type.value);
                var selectedYear = normalize(year && year.value);
                var visible = 0;

                cards.forEach(function(card) {
                    var haystack = normalize([
                        card.dataset.title,
                        card.dataset.region,
                        card.dataset.genre,
                        card.dataset.type,
                        card.dataset.year
                    ].join(" "));
                    var ok = true;

                    if (q && haystack.indexOf(q) === -1) {
                        ok = false;
                    }
                    if (selectedRegion && normalize(card.dataset.region) !== selectedRegion) {
                        ok = false;
                    }
                    if (selectedType && normalize(card.dataset.type) !== selectedType) {
                        ok = false;
                    }
                    if (selectedYear && normalize(card.dataset.year) !== selectedYear) {
                        ok = false;
                    }

                    card.hidden = !ok;
                    if (ok) {
                        visible += 1;
                    }
                });

                if (empty) {
                    empty.classList.toggle("is-visible", visible === 0);
                }
            }

            [search, region, type, year].forEach(function(node) {
                if (node) {
                    node.addEventListener("input", apply);
                    node.addEventListener("change", apply);
                }
            });

            var params = new URLSearchParams(window.location.search);
            var q = params.get("q");
            if (q && search) {
                search.value = q;
            }
            apply();
        });
    }

    function setupCategoryScroll() {
        bySelector("[data-scroll-target]").forEach(function(link) {
            link.addEventListener("click", function(event) {
                var target = document.querySelector(link.getAttribute("data-scroll-target"));
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({behavior: "smooth", block: "start"});
                }
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        setupMobileMenu();
        setupHero();
        setupFilters();
        setupCategoryScroll();
    });
})();
