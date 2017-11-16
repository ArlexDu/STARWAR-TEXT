/**
 * Created by arlex on 2017/10/20.
 *
 */
//我们的服务界面的初始化
var serviceController = function(){
    //菜单栏设置
    function menuConfig(){
        $("header").children("a").map(function () {
            $(this).removeClass("menu");
            $(this).addClass("menu");
        });
        $("#service-menu").removeClass("menu");
        $(".process-container").remove();
        var process = $("<div class='process-container'> <div class='process-line'></div></div>");
        process.appendTo($("#service-menu"));

    }

    function showPage(){
        flipPage($('#service-content'),"service");
        $("header").css("background-color","").css("opacity",1);
    }



    $(document).bind('mousewheel DOMMouseScroll', function(event) {

        if(currentPage === 1){
            console.log(currentPage);
            event.preventDefault();
        }
        var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
        if(delta<0){

        }else{

        }

    });

    $(document).scroll(function () {

        if($(window).scrollTop() > 80){
            $('header').addClass('scrolled')
        }
        else{
            $('header').removeClass('scrolled')
        }
    })

    var controller = {};
    controller.execute = function(){
        showPage();
        menuConfig();
    };
    return controller;
}

