(function($){
    const choice = $('#choiceBox');
    const modelLink = choice.find('a');
  
    // .action
    modelLink.on('mouseenter focus', function(){
                $(this).addClass('active');
              })
              .on('mouseleave blur', function(){
                $(this).removeClass('active');
              });
})(jQuery);