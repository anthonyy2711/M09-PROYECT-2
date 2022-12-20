        
$(document).ready(function() {
    $(window).scroll(function() {
        var hT = $('#div-counter').offset().top,
            hH = $('#div-counter').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
         console.log((hT-wH) , wS);
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
            $('.counter').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                    
                });
                
                });
               
        }
        
     });


     return false;
});  