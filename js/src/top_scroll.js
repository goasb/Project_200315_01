(function($){
  let mytop = $('.top_scroll');
  
    mytop.on('click', function(e){
      e.preventDefault();
      $('html, body').animate({'scrollTop':0});
    });

    const win = $(windows);

  win.on('scroll',function(e){
    e.preventDefault();
    let myscroll = $(this).scrollTop(myscroll > 150 );
  });

  }(jQuery));
   