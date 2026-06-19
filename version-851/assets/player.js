(function () {
  function bootPlayer(box) {
    var video = box.querySelector('video');
    var cover = box.querySelector('[data-player-cover]');
    var button = box.querySelector('[data-play-button]');

    if (!video) {
      return;
    }

    var url = video.getAttribute('data-stream');
    var started = false;
    var hls = null;

    function hideCover() {
      if (cover) {
        cover.classList.add('is-hidden');
      }
    }

    function start() {
      if (!url) {
        return;
      }

      hideCover();

      if (started) {
        video.play().catch(function () {});
        return;
      }

      started = true;

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.play().catch(function () {});
        return;
      }

      if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
          video.play().catch(function () {});
        });
        return;
      }

      video.src = url;
      video.play().catch(function () {});
    }

    if (cover) {
      cover.addEventListener('click', start);
    }

    if (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        start();
      });
    }

    video.addEventListener('click', function () {
      if (!started) {
        start();
      }
    });

    window.addEventListener('pagehide', function () {
      if (hls && hls.destroy) {
        hls.destroy();
      }
    });
  }

  Array.prototype.slice.call(document.querySelectorAll('[data-player]')).forEach(bootPlayer);
})();
