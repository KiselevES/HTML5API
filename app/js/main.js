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

    $(video).on({
        timeupdate: function () {
            setTime(video.duration - video.currentTime);
            let currentPosition = video.currentTime / video.duration * 100;
            $('.progress').css('width', currentPosition + '%');
        },
        canplay: function () {
            setTime(video.duration);
        }
    });

    function setTime(time) {
        let minutesLeft = Math.floor(time / 60),
            secondsLeft = Math.floor(time - (minutesLeft * 60));

        if (secondsLeft.toString().length === 1) {
            secondsLeft = '0' + secondsLeft;
        }

        var timeString = minutesLeft + ":" + secondsLeft;
        $('.time').text(timeString);
    }

    $(video).on('timeupdate', function () {
        let currentPosition = video.currentTime / video.duration * 100;
        $('.progress').css('width', currentPosition + '%');
    })
});