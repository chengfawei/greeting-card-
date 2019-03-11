window.onload = function () {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    //当音乐播放完停止时候，自动停止光盘旋转效果
    audio.addEventListener("ended", function (event) {
        music.setAttribute("class", "");
    }, false);

    //点击音乐图标，控制音乐播放效果
    // music.onclick = function () {
    //     if (audio.paused) {
    //         audio.play();
    //         //this.setAttribute("class","play");
    //         this.style.animationPlayState = "running";
    //     } else {
    //         audio.pause();
    //         /*this.setAttribute("class","");*/
    //         this.style.animationPlayState = "paused";
    //     }
    //     ;
    // };

    music.addEventListener("touchstart",function(event){
        if (audio.paused){
            audio.play();
            this.setAttribute("class","play");
        } else{
            audio.pause();
            this.setAttribute("class","");
        };
    },false);

    page1.addEventListener("touchstart", function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top="100%";

        setTimeout(function () {
            page2.setAttribute("class", "fadeOut");
            page3.setAttribute("class", "fadeIn");
        }, 5500);
    }, false);
};