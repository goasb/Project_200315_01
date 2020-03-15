//  마우스 휠 ===================================

(function($){
    const htmlEl = $('html,body');
    const wrap = $('#wrap');
    const scrollEl = wrap.find('.scroll');

    htmlEl.animate({scrollTop:0});
let myScrollElTop = [];
let scrollLen = scrollEl.length;
let timed = 500;

for(let i = 0; i < scrollLen; i++){
   let scTop = scrollEl.eq(i).offset().top;
   myScrollElTop.push(scTop);
}

let myStatus = true , n , useN = 0;




const ScrollMagic = function(){
    htmlEl.animate({scrollTop:myScrollElTop[useN]},
       timed,'easeOutSine',function(){
           myStatus = true;
  });
}; // scrollMagic()

$(window).on('mousewheel DOMMouseScroll',function(e){
    if(e.originalEvent.wheelDelta){
        n = e.originalEvent.wheelDelta * -1;
    }else{n = e.originalEvent.delta * 40;}
    
    if(myStatus){
        myStatus = false;
      if(n > 0){useN++;
       if(useN >= scrollLen){useN = scrollLen-1;} ScrollMagic();
     }else{useN--;
       if(useN < 0){useN = 0;} ScrollMagic();}
    }
});
//  마우스 휠 ===================================


// 터치 사용시 ===================================
let startP,endP;
$(window).on('touchstart',function(e){
 startP = e.originalEvent.touches[0].pageY;
}); // touchstart

$(window).on('touchmove',function(){
 htmlEl.animate({scrollTop:myScrollElTop[useN]},0);
}); // touchmove

$(window).on('touchend',function(e){
    endP = e.originalEvent.changedTouches[0].pageY;
   
 if(myStatus){
     myStatus = false;
     if(startP > endP){
         useN++;
         if(useN >= scrollLen){useN = scrollLen-1;}
         ScrollMagic();
     }else{
         useN--;
         if(useN < 0){useN = 0;}
         ScrollMagic();
     }
 }
});

})(jQuery);