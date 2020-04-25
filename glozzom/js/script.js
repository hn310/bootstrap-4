$('#main-slider').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover',
    wrap: true
});

$('#testimonial-slider').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover',
    wrap: true
});

//infinite loop
$('#testimonial-slider').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 1;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


$(document).ready(function() {
    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    // when the modal is opened autoplay it  
    $('#videoModal').on('shown.bs.modal', function(e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    // stop playing the youtube video when I close the modal
    $('#videoModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })
    // document ready  
});

$(document).ready(function() {
    $(".gallery-img").click(function() {
        var img = $(this).attr('src');
        $("#show-img").attr('src', img);
        $("#gallery-img-modal").modal('show');
    });
});