(function() {
    function initPlayer() {
        var video = document.querySelector("[data-video-player]");
        var cover = document.querySelector("[data-play-trigger]");
        if (!video) {
            return;
        }

        var source = video.getAttribute("data-src");
        var hls;

        function attachSource() {
            if (!source || video.dataset.ready === "1") {
                return;
            }

            if (window.Hls && window.Hls.isSupported()) {
                hls = new window.Hls({
                    maxBufferLength: 30,
                    enableWorker: true
                });
                hls.loadSource(source);
                hls.attachMedia(video);
            } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = source;
            }

            video.dataset.ready = "1";
        }

        function playVideo() {
            attachSource();
            if (cover) {
                cover.classList.add("is-hidden");
            }
            var promise = video.play();
            if (promise && typeof promise.catch === "function") {
                promise.catch(function() {
                    if (cover) {
                        cover.classList.remove("is-hidden");
                    }
                });
            }
        }

        if (cover) {
            cover.addEventListener("click", playVideo);
        }

        video.addEventListener("click", function() {
            if (video.paused) {
                playVideo();
            }
        });

        video.addEventListener("play", function() {
            if (cover) {
                cover.classList.add("is-hidden");
            }
        });

        window.addEventListener("beforeunload", function() {
            if (hls && typeof hls.destroy === "function") {
                hls.destroy();
            }
        });

        attachSource();
    }

    document.addEventListener("DOMContentLoaded", initPlayer);
})();
