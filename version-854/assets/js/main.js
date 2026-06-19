function bySelector(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
}

function initMenu() {
    var menuButton = document.querySelector('[data-menu-toggle]');
    var mobileNav = document.querySelector('[data-mobile-nav]');
    if (!menuButton || !mobileNav) {
        return;
    }
    menuButton.addEventListener('click', function () {
        mobileNav.classList.toggle('is-open');
    });
}

function initSearch() {
    var toggle = document.querySelector('[data-search-toggle]');
    var panel = document.querySelector('[data-search-panel]');
    var input = document.getElementById('globalSearchInput');
    var results = document.getElementById('globalSearchResults');
    if (!toggle || !panel || !input || !results) {
        return;
    }
    toggle.addEventListener('click', function () {
        panel.classList.toggle('is-open');
        if (panel.classList.contains('is-open')) {
            input.focus();
        }
    });
    input.addEventListener('input', function () {
        var query = input.value.trim().toLowerCase();
        if (!query) {
            results.innerHTML = '';
            return;
        }
        var index = window.__MOVIE_SEARCH_INDEX__ || [];
        var matched = [];
        for (var i = 0; i < index.length; i += 1) {
            var item = index[i];
            if (item.search.indexOf(query) !== -1) {
                matched.push(item);
            }
            if (matched.length >= 8) {
                break;
            }
        }
        results.innerHTML = matched.map(function (item) {
            return '<a class="search-result" href="' + item.url + '">' +
                '<img src="' + item.cover + '" alt="' + item.title + '">' +
                '<span><strong>' + item.title + '</strong><span>' + item.meta + '</span></span>' +
                '</a>';
        }).join('');
    });
}

function initHero() {
    var root = document.querySelector('[data-hero]');
    if (!root) {
        return;
    }
    var slides = bySelector('[data-hero-slide]', root);
    var dots = bySelector('[data-hero-dot]', root);
    var prev = root.querySelector('[data-hero-prev]');
    var next = root.querySelector('[data-hero-next]');
    var current = 0;
    var timer = null;
    function show(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach(function (slide, i) {
            slide.classList.toggle('is-active', i === current);
        });
        dots.forEach(function (dot, i) {
            dot.classList.toggle('is-active', i === current);
        });
    }
    function start() {
        timer = window.setInterval(function () {
            show(current + 1);
        }, 5200);
    }
    function restart() {
        window.clearInterval(timer);
        start();
    }
    dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
            show(Number(dot.getAttribute('data-hero-dot')));
            restart();
        });
    });
    if (prev) {
        prev.addEventListener('click', function () {
            show(current - 1);
            restart();
        });
    }
    if (next) {
        next.addEventListener('click', function () {
            show(current + 1);
            restart();
        });
    }
    if (slides.length > 1) {
        start();
    }
}

function initPageFilters() {
    bySelector('.js-page-filter').forEach(function (input) {
        input.addEventListener('input', function () {
            var query = input.value.trim().toLowerCase();
            bySelector('.filter-target').forEach(function (card) {
                var haystack = card.getAttribute('data-search') || card.textContent.toLowerCase();
                card.style.display = haystack.indexOf(query) !== -1 ? '' : 'none';
            });
        });
    });
}

function attachHls(video, source) {
    if (!source) {
        return;
    }
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        return;
    }
    if (window.Hls && window.Hls.isSupported()) {
        var hls = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true,
            backBufferLength: 90
        });
        hls.loadSource(source);
        hls.attachMedia(video);
        video._hlsInstance = hls;
        return;
    }
    video.src = source;
}

function initPlayers() {
    bySelector('[data-player]').forEach(function (player) {
        var video = player.querySelector('video');
        var overlay = player.querySelector('.player-overlay');
        if (!video) {
            return;
        }
        var source = video.getAttribute('data-src');
        attachHls(video, source);
        function playVideo() {
            if (overlay) {
                overlay.classList.add('is-hidden');
            }
            var playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function () {
                    if (overlay) {
                        overlay.classList.remove('is-hidden');
                    }
                });
            }
        }
        if (overlay) {
            overlay.addEventListener('click', playVideo);
        }
        video.addEventListener('play', function () {
            if (overlay) {
                overlay.classList.add('is-hidden');
            }
        });
        video.addEventListener('pause', function () {
            if (overlay && video.currentTime === 0) {
                overlay.classList.remove('is-hidden');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initSearch();
    initHero();
    initPageFilters();
    initPlayers();
});
