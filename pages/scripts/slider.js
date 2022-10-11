$(document).ready(function() {
    var $imagesCarousel = $('.carouselOfImages').flickity({
      contain: true,
      autoPlay: false,
      wrapAround: true,
      friction: 0.3
    });
    function resizeCells() {
      var flkty = $imagesCarousel.data('flickity');
      var $current = flkty.selectedIndex
      var $length = flkty.cells.length
      if ($length <='5') {
        $imagesCarousel.flickity('destroy');
      }
      $('.carouselOfImages .carouselImage').removeClass("nextToSelected");
      $('.carouselOfImages .carouselImage').eq($current-1).addClass("nextToSelected");
      if ($current+1 == $length) {
        var $endCell = "0"
      } else {
        var $endCell = $current+1
      }
       $('.carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
      };
    resizeCells();
    
    $imagesCarousel.on('scroll.flickity', function() {
        resizeCells();
      });
    })