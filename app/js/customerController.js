/**
 * Created by arlex on 2017/10/20.
 *
 */
//我们的客户界面的初始化
var customerController = function(){
    //菜单栏设置
    function menuConfig(){
        $("header").children("a").map(function () {
            $(this).removeClass("menu");
            $(this).addClass("menu");
        })
        $("#customer-menu").removeClass("menu");
        $(".process-container").remove();
        var process = $("<div class='process-container'> <div class='process-line'></div></div>");
        process.appendTo($("#customer-menu"));
    }

    function showPage(){
        $("#container > div").hide();
        $("#customer").show();
        $("header").css("background-color","black").css("opacity",0.6);
    };
    $(document).ready(function(){
        $(".brand .logoClass img").mouseover(function () {
            $(this).removeClass().addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
            });
            var url = $(this)[0].src;
            $("#cooper-brand-img img").attr("src",url);
            $("#cooper-brand-img").show();
            $("#cooper-brand-text").hide();
        });
        $(".brand .logoClass img").mouseleave(function () {
            $("#cooper-brand-img").hide();
            $("#cooper-brand-text").show();
        })

        $(".customer .logoClass img").mouseover(function () {
            $(this).removeClass().addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
            });
            var url = $(this)[0].src;
            $("#cooper-customer-img img").attr("src",url);
            $("#cooper-customer-img").show();
            $("#cooper-customer-text").hide();
        });
        $(".customer .logoClass img").mouseleave(function () {
            $("#cooper-customer-img").hide();
            $("#cooper-customer-text").show();
        })
    });
    var controller = {};
    controller.execute = function () {
        showPage();
        menuConfig();
    };
    return controller;
}
