/**
 * Created by arlex on 2017/10/20.
 *
 */

//联系我们界面的初始化
var joinusController = function(){

    //菜单栏设置
    function menuConfig(){
        $("header").children("a").map(function () {
            $(this).removeClass("menu");
            $(this).addClass("menu");
        })
        $("#joinus-menu").removeClass("menu");
        $(".process-container").remove();
        var process = $("<div class='process-container'> <div class='process-line'></div></div>");
        process.appendTo($("#joinus-menu"));
    }

    var showPage = function(){
        $("#container > div").hide();
        $("#joinus").show();
        $("header").css("background-color","").css("opacity",1);
    };
    var controller = {};
    controller.execute = function() {
        showPage();
        menuConfig();
    };
    return controller;
}