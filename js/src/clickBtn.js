(function($){

    const clickBtn = $('.clickBox');
    const clickLink = clickBtn.find('a');

    const popUp = $('.popupBox');
    const closeBtn = popUp.children('.closeBtn');
    
    
    clickLink.on('click',function(e){
        e.preventDefault();
        popUp.addClass('active');
    });
    closeBtn.on('click',function(e){
        e.preventDefault();
        popUp.removeClass('active');
    });

// modelS Page ===============================

    const orderBox = $('.orderBox');
    const videoLink = orderBox.find('a');
    
    const Mvideo = $('.models_video');
    const McloseBtn = Mvideo.find('.models_closeBtn');

    videoLink.on('click',function(e){
       e.preventDefault();
       Mvideo.addClass('active'); 
    });

    McloseBtn.on('click',function(e){
        e.preventDefault();
        Mvideo.removeClass('active'); 
     });

    })(jQuery);