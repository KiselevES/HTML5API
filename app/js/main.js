$(document).ready(function () {
    var video = document.querySelector('.video_source');

    $('.play').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if (video.paused) {
            video.play();
            $this.text('||');
        } else {
            video.pause();
            $this.text('>');
        }
    });

    $(video).on('timeupdate', function () {
        var currentTime = video.currentTime,
            duration = video.duration,
            elapsedTime = duration - currentTime,
            minutesLeft = Math.floor(elapsedTime / 60),
            secondsLeft = Math.floor(elapsedTime - (minutesLeft * 60));

        if (secondsLeft.toString().length === 1) {
            secondsLeft ="0" + secondsLeft;
        }
        var timeString = minutesLeft + ':' + secondsLeft;
        $('.time').text(timeString);
    });

    $(video).on('canplay', function () {
        var time = video.duration,
            minutes = Math.floor(time / 60),
            seconds = Math.floor(time - (minutes * 60));

        if( seconds.toString().length ===1){
            seconds = '0' + seconds;
        }

        timeString = minutes + ":" + seconds;
        $('.time').text(timeString);
    })
});