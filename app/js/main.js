$(document).ready(function () {
    var video = document.querySelector('.video_source');

    $('.play').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if(video.paused) {
            video.play();
            this.text = '||';
        } else {
            video.pause();
            this.text = '>';
        }
    });
});