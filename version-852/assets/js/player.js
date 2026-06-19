(function () {
  function setupPlayer(root) {
    var video = root.querySelector('video');
    var cover = root.querySelector('.player-cover');
    var source = root.getAttribute('data-video');
    var started = false;
    var hls = null;

    if (!video || !cover || !source) {
      return;
    }

    function playVideo() {
      video.play().catch(function () {});
    }

    function start() {
      if (started) {
        playVideo();
        return;
      }

      started = true;
      cover.classList.add('is-hidden');
      video.setAttribute('controls', 'controls');

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        video.addEventListener('loadedmetadata', playVideo, { once: true });
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
        hls.loadSource(source);
        hls.attachMedia(video);
        hls.on(window.Hls.Events.MANIFEST_PARSED, playVideo);
      } else {
        video.src = source;
        playVideo();
      }
    }

    cover.addEventListener('click', start);
    video.addEventListener('click', function () {
      if (!started) {
        start();
      }
    });

    window.addEventListener('pagehide', function () {
      if (hls) {
        hls.destroy();
      }
    });
  }

  Array.prototype.slice.call(document.querySelectorAll('[data-player]')).forEach(setupPlayer);
}());
