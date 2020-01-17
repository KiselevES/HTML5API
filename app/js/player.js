$(document).ready(function(){
	// var video = $('#video')[0];

	var video = document.getElementById("video");

	$('.play').on('click', function(e){
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
		timeupdate : function () {
			var duration = video.duration,
				currentTime = video.currentTime;

			setTime(duration - currentTime);

			var progression = Math.floor(currentTime / duration * 100);

			$('.progress').css({
				'width' : progression + '%'
			});
		},

		canplay : function () {
			setTime(video.duration);
		}
	});

	$('.timeline').on('click', function(e){
	    e.preventDefault();

		var
			$this = $(this),
			timelinePos = $this.offset().left,
			position = e.pageX - timelinePos,
			timelineWidth = $this.width(),
			percents = position / timelineWidth * 100,
			trackPosition = video.duration / 100 * percents;

		video.currentTime = trackPosition;

	});


	function setTime (time) {
		var minutesLeft = Math.floor(time / 60),
			secondsLeft =  Math.floor(time - (minutesLeft * 60)),
			timeString = minutesLeft + ":" + secondsLeft;

		$('.time').text(timeString);
	}


}); // -> ready_end;