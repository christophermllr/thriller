(function() {
    "use strict";
    var blockPlay = false,
        blockPlaySeconds = 5,
        count = blockPlaySeconds,
        countdown;

    addEventListener("click", function() {
        if (document.webkitIsFullScreen) {
            document.webkitCancelFullScreen();
        } else {
            document.documentElement.webkitRequestFullScreen();
        }
    });
    
    $(function() {
        if (!window.Modernizr.audio.mp3) {
            alert("GET A REAL BROWSER");
            return false;
        }
        
        var audio = $("audio").get(0);
      
        $("html").on("keyup", function(e) {
            if (e.keyCode === 32 && !blockPlay) {
              audio.play();
              blockPlay = true;
            }
        });
      
        $(audio).bind('timeupdate', function() {
            if(audio.duration === audio.currentTime) {
                $("progress").val(0);
                countdown = setInterval(function() {
                    $("p").html(count + " seconds remaining!");
                    if (count === 0) {
                        blockPlay = false;
                        clearInterval(countdown);
                        count = blockPlaySeconds;
                        $("p").html("");
                    }
                    count--;
                }, 1000);
            } else {
                $("progress").val((audio.currentTime / audio.duration) * 100);
            }
        });
    });
})();
