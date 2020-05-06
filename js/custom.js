(function ($) {
  $('.vegas-slider').vegas({
    transition: ['fade' , 'burn' , 'zoomIn'],
    timer: true,
    delay: 3800,
    slides: [
      {src : 'img/submarine.png', transition: 'fade2'},
      {src : 'img/Alpine.png', transition: 'fade2'},
      {src : 'img/tiger.png', transition: 'fade2'},
      {src : 'img/helicotop.png', transition: 'fade2'},
      {src : 'img/car2.png', transition: 'fade2'},
    ]
  });

})(jQuery);
