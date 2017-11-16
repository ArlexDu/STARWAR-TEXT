/**
 * Created by arlex on 2017/10/20.
 *
 */
//主页的初始化
var introductionController = function(){

    //展示出当前的页面
    function showPage(){
        $("#container > div").hide();
        $("#introduction").show();
        $("header").css("background-color","").css("opacity",1);
    };

    //设置背景视频的大小
    function configVideo(){
        window.onresize = function () {
            resizeToCover();
        };
        $(window).trigger("resize");
    }

    //菜单栏设置
    function menuConfig(){
        $("header").children("a").map(function () {
            $(this).removeClass("menu");
            $(this).addClass("menu");
        })
        $("#introduction-menu").removeClass("menu");
        $(".process-container").remove();
        var process = $("<div class='process-container'> <div class='process-line'></div></div>");
        process.appendTo($("#introduction-menu"));
        //监听滚动事件
        var scroll_height = $("#wrapper-in>div").height();
        $("#wrapper-in").scroll(function () {
            var current = $("#wrapper-in").scrollTop();
            //当滑动到底的时候，监听鼠标滚轮事件，触发到下一页
            if(current + $("#wrapper-in").height() >= scroll_height){
                $(document).on("mousewheel",function (e) {
                    var moveY = e.originalEvent.deltaY;
                    if(moveY>0){
                        current += moveY;
                    }else if(moveY<0){
                        $(document).off("mousewheel");
                    }
                    var progress = current/scroll_height*100;
                    if(progress>=100){//当进度条满了的时候跳转页面
                        $(document).off("mousewheel");
                        document.getElementById("service-menu").click();
                    }else{
                        $("#introduction-menu .process-container .process-line").css({
                            "width":progress+"%"
                        });
                    }
                })
            }
            var progress = current/scroll_height*100;
            $("#introduction-menu .process-container .process-line").css({
                "width":progress+"%"
            });
        })
    }

    //背景视频图片实时平铺整个界面
    function resizeToCover(){
        var width = $(document).width();
        var height = $(document).height();

        var video_height = $("#video").attr("height");
        var video_width = $("#video").attr("width");

        var scale_h = height/video_height;
        var scale_w = width/video_width;

        var scale = scale_w > scale_h ? scale_w : scale_h;

        var new_height = scale * video_height;
        var new_width = scale * video_width

        $("#video").attr("width",new_width);
        $("#video").attr("height",new_height);

        $('#video_contanier').scrollLeft((new_width - width) / 2);
        $('#video_contanier').scrollLeft((new_height - height) / 2);
    }

    //设置星球大战文字动画
    function setStartScroll(){
        var controller = new ScrollMagic.Controller({container:"#wrapper-in"});
        if($("#p0").length == 0){
            $("#wrapper-in>div").children("p").map(function (index,dom) {
                // 设置文字框的ID
                dom.id = "p"+index;
                addAnimation(controller,dom.id);
            })
        }
    }

    //添加滑轮文字效果
    function addAnimation(controller,id){
        id = "#"+id;
        var textShow = TweenMax.staggerFromTo(id,0.5,
            {
                y:0,
                scale:1,
                opacity:0
            },
            {
                y:-30,
                scale:1,
                opacity:1
            },
            0.1)
        var sceneShow = new ScrollMagic.Scene({
            triggerElement:id,
            duration:250,
            offset: -250
        })
            .setTween(textShow)
            // .addIndicators()
            .addTo(controller);

        var textHide = TweenMax.staggerFromTo(id,0.5,
            {
                y:-30,
                scale:1,
                opacity:1
            },
            {
                y:-60,
                scale:1.5,
                opacity:0
            },
            0.1)
        var ceneHide = new ScrollMagic.Scene({
            triggerElement:id,
            duration:250,
            offset: 0
        })
            .setTween(textHide)
            // .addIndicators()
            .addTo(controller);
    }

    var controller = {};
    var execute = function () {
        showPage();
        configVideo();
        setStartScroll();
        menuConfig();
    }
    controller.execute = execute;
    return controller;
}