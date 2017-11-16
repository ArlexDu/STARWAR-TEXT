var controller = {
    introduction: introductionController(),
    service: serviceController()
};

var currentPage = 0;

$(function () {
    //路由的设置
    crossroads.addRoute("introduction",function(){
        if(isLoading===0) {
            loadPage(controller.introduction);
            currentPage = 0;
        }
    });
    crossroads.addRoute("service",function(){
        if(isLoading===0) {
            loadPage(controller.service);
            currentPage = 1;
        }
    });
    crossroads.routed.add(console.log, console); //log all routes

    //setup hasher
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash); //parse initial hash
    hasher.changed.add(parseHash); //parse hash changes
    hasher.init(); //start listening for history change
    //update URL fragment generating new history record
    hasher.setHash('introduction');
});

//载入页面
function loadPage(controller){
    controller.execute();
}



