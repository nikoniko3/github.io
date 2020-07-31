$(function(){
    var flag = 1
    $(window).bind('scroll',function(){
        
        var navTop = $(window).scrollTop();
        if(parseInt(navTop)>50 ){

            if(flag){
                flag = 0
                $(".nav-logo").show(500);
                flag = 1
            }
        }
        if(parseInt(navTop)<50){
            if(flag){
                flag = 0
                $(".nav-logo").hide(500,function(){
                    flag = 1
                });
               
            }
        }
    })

})