(function($){
    let mob=480,tab=768,pc=1280,laptop=1366,pcfull
    let mySet = ['mobile','tablet','pc','laptop','pcfull'];
    
    let nowDevice = null;

    const DeviceCheck = function(w){
        if(w <=mob){nowDevice = mob;}
        else if (w > mob && w <= tab){nowDevice = tab;}
        else if (w > tab && w <= pc){nowDevice = pc;}
        else if (w > pc && w <= laptop){nowDevice = laptop;}
        else (nowDevice = pcfull);
        return nowDevice;
    } // DeviceCheck

    const win = $(window);
    let winW = win.outerWidth();
    let beforeDevice = DeviceCheck(winW);

    win.on('resize',function(){
        let nowWinW = win.outerWidth();
        let afterDevice = DeviceCheck(nowWinW);
        if(winW !== nowWinW && beforeDevice !== afterDevice){
            location.reload();
        }
    })
})(jQuery);