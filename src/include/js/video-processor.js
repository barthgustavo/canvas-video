class VideoProcessor {
    constructor(videoId, canvasId) {
        this.videoWidth, this.videoHeight;

        this.video = document.getElementById(videoId);
        this.canvas = document.getElementById(canvasId).getContext('2d');

        video.addEventListener('play', () => {
            this.videoWidth = video.videoWidth;
            this.videoHeight = video.videoHeight;
            this.callback();
        }, false);
    }

    callback() {
        if (this.video.paused || this.video.ended) return;

        this.computeFrame();

        setTimeout(() => { this.callback() }, 0);
    }

    computeFrame() {
        this.canvas.drawImage(this.video, 0, 0, this.videoWidth, this.videoHeight);
    }

    playPauseVideo() {
        if (this.video.paused || this.video.ended)
            this.video.play();
        else
            this.video.pause();
    }

    nextFrame() {
        this.video.currentTime += 0.1;
        this.computeFrame();
    }

    prevFrame() {
        this.video.currentTime -= 0.1;
        this.computeFrame();
    }
}

const videoProcessor = new VideoProcessor('video', 'canvas');

document.getElementById('play-pause-video').onclick = function() {
    videoProcessor.playPauseVideo();
}

document.getElementById('next-frame').onclick = function() {
    videoProcessor.nextFrame();
}

document.getElementById('prev-frame').onclick = function() {
    videoProcessor.prevFrame();
}