$(document).ready(function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    var $animation_elements = $('.animation-element');
    var $heading = $(".heading");
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
              $element.addClass('animate');
            } 
              else {
              $element.removeClass('animate');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    $("ul.nav li a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();
        console.log("$(this.hash).offset().top - "+$(this.hash).offset().top);
       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 600, function(){
   
           console.log("this.hash - "+this.hash);
           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = this.hash;
         });

    });

    
});
