function $(selector){
    var doms = document.querySelectorAll(selector);
    if(doms.length > 1){
        return doms;
    }else if(doms.length === 1){
        return doms[0]
    }else{
        return null;
    }
}

function setDOMClass(context, className){
    context.setAttribute('class', className);
}

function setDisPlay(context, value){
    context.style.display = value;
}

var config = {
    timeout: 5500
};

window.addEventListener('load', function(){
    //获取元素
    var music = $("#music");
    var audio = $("audio");
    var page1 = $("#page1");
    var page2 = $("#page2");
    var page3 = $("#page3");

    //当音乐播放完停止时候，自动停止光盘旋转效果
    audio.addEventListener("ended", function(event) {
        music.setAttribute("class", "");
    }, false);

    //点击音乐图标控制音乐播放效果
    music.addEventListener("touchstart", function(event) {
        if(audio.paused) {
            audio.play();
            setDOMClass(this, "play")
        } else {
            audio.pause();
            setDOMClass(this, "")
        }
    }, false);

    //点击屏幕，开启好运2017，翻页
    page1.addEventListener("touchstart", function(event) {
        setDisPlay(page1, "none");
        setDisPlay(page2, "block");
        setDisPlay(page3, "block");

        page3.style.top = "100%";
        var timer = setTimeout(function() {
            setDOMClass(page2, "page fadeOut");
            setDOMClass(page3, "page fadeIn");
            clearTimeout(timer);
        }, config.timeout);

    }, false);
});