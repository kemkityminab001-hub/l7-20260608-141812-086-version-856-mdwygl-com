import { H as Hls } from './hls.js';

function bindPlayer(frame) {
  const video = frame.querySelector('video[data-stream]');
  const cover = frame.querySelector('.player-cover');

  if (!video) {
    return;
  }

  const src = video.getAttribute('data-stream');
  let attached = false;

  function attach() {
    if (attached || !src) {
      return;
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if (Hls && Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 30,
        startLevel: -1,
        lowLatencyMode: true
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      video._hlsInstance = hls;
    } else {
      video.src = src;
    }

    attached = true;
  }

  function play() {
    attach();
    frame.classList.add('is-playing');
    const task = video.play();

    if (task && typeof task.catch === 'function') {
      task.catch(function () {});
    }
  }

  if (cover) {
    cover.addEventListener('click', play);
  }

  video.addEventListener('play', function () {
    attach();
    frame.classList.add('is-playing');
  });

  video.addEventListener('click', function () {
    attach();
  }, { once: true });
}

document.querySelectorAll('[data-player]').forEach(bindPlayer);
