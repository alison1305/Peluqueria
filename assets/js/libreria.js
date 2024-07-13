window.addEventListener('scroll', function () {
    if (this.window.scrollY > 45) {
        this.document.querySelector('.navbar1').classList.add('navbar-flotante')
    } else {
        this.document.querySelector('.navbar1').classList.remove('navbar-flotante')
    }
})


/* $(document).ready(function () {
    $('#carouselExample').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                if (e.direction == "left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                } else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });
});
 */