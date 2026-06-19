(function () {
  "use strict";

  function ready(callback) {
    if (document.readyState !== "loading") {
      callback();
      return;
    }

    document.addEventListener("DOMContentLoaded", callback);
  }

  ready(function () {
    initNavigation();
    initSearchPanels();
    initHeroSlider();
    initPlayers();
    initActions();
    readQueryForMovieSearch();
  });

  function initNavigation() {
    var button = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-mobile-nav]");

    if (!button || !menu) {
      return;
    }

    button.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function initSearchPanels() {
    var scopes = document.querySelectorAll("[data-search-scope]");

    scopes.forEach(function (scope) {
      var input = scope.querySelector("[data-search-input]");
      var cards = Array.prototype.slice.call(scope.querySelectorAll("[data-card]"));
      var result = scope.querySelector("[data-result-count]");

      if (!input || !cards.length) {
        return;
      }

      var update = function () {
        var query = normalize(input.value);
        var visible = 0;

        cards.forEach(function (card) {
          var text = normalize(card.getAttribute("data-search") || card.textContent || "");
          var match = !query || text.indexOf(query) !== -1;
          card.classList.toggle("is-hidden", !match);

          if (match) {
            visible += 1;
          }
        });

        if (result) {
          result.textContent = visible + " 个结果";
        }
      };

      input.addEventListener("input", update);
      update();
    });
  }

  function readQueryForMovieSearch() {
    var params = new URLSearchParams(window.location.search);
    var query = params.get("q");

    if (!query) {
      return;
    }

    var input = document.querySelector("[data-search-input]");

    if (input) {
      input.value = query;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function normalize(value) {
    return String(value || "")
      .trim()
      .toLocaleLowerCase()
      .replace(/\s+/g, " ");
  }

  function initHeroSlider() {
    var slider = document.querySelector("[data-hero-slider]");

    if (!slider) {
      return;
    }

    var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-dot]"));
    var index = 0;
    var timer = null;

    if (slides.length <= 1) {
      return;
    }

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === index);
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot, dotIndex) {
      dot.addEventListener("click", function () {
        show(dotIndex);
        start();
      });
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    show(0);
    start();
  }

  function initPlayers() {
    var players = document.querySelectorAll("[data-player]");

    players.forEach(function (player) {
      var video = player.querySelector("video[data-hls-src]");
      var button = player.querySelector("[data-player-button]");
      var message = player.querySelector("[data-player-message]");

      if (!video || !button) {
        return;
      }

      function setMessage(text) {
        if (message) {
          message.textContent = text || "";
        }
      }

      function loadSource() {
        var source = video.getAttribute("data-hls-src");

        if (!source) {
          setMessage("当前影片暂无可用播放源。");
          return;
        }

        if (video.dataset.loaded === "true") {
          return;
        }

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = source;
          video.dataset.loaded = "true";
          return;
        }

        if (window.Hls && window.Hls.isSupported()) {
          var hls = new window.Hls({
            enableWorker: true,
            maxBufferLength: 60
          });

          hls.loadSource(source);
          hls.attachMedia(video);
          video._hlsInstance = hls;
          video.dataset.loaded = "true";

          hls.on(window.Hls.Events.ERROR, function (event, data) {
            if (data && data.fatal) {
              setMessage("播放源加载失败，请刷新页面或稍后重试。");
            }
          });

          return;
        }

        video.src = source;
        video.dataset.loaded = "true";
        setMessage("当前浏览器可能需要支持 HLS 的播放器扩展。");
      }

      function playVideo() {
        loadSource();
        button.classList.add("is-hidden");
        setMessage("");

        var playPromise = video.play();

        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {
            setMessage("浏览器阻止了自动播放，请再次点击视频播放按钮。");
          });
        }
      }

      button.addEventListener("click", playVideo);

      video.addEventListener("play", function () {
        button.classList.add("is-hidden");
      });

      video.addEventListener("pause", function () {
        if (video.currentTime === 0 || video.ended) {
          button.classList.remove("is-hidden");
        }
      });
    });
  }

  function initActions() {
    document.querySelectorAll("[data-favorite]").forEach(function (button) {
      button.addEventListener("click", function () {
        var code = button.getAttribute("data-favorite");
        var key = "movie-favorites";
        var favorites = [];

        try {
          favorites = JSON.parse(localStorage.getItem(key) || "[]");
        } catch (error) {
          favorites = [];
        }

        if (favorites.indexOf(code) === -1) {
          favorites.push(code);
        }

        localStorage.setItem(key, JSON.stringify(favorites));
        button.textContent = "已收藏";
      });
    });

    document.querySelectorAll("[data-share]").forEach(function (button) {
      button.addEventListener("click", function () {
        var title = document.title;
        var url = window.location.href;

        if (navigator.share) {
          navigator.share({ title: title, url: url }).catch(function () {});
          return;
        }

        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(function () {
            button.textContent = "链接已复制";
          });
        }
      });
    });
  }
})();
