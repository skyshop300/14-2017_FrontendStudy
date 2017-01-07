$(document).ready(function(){

    // navigation click시 처리
    $('.scroll').click(function(e){

        e.preventDefault();

        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 500);

    })

    // 화면 리사이징
    $(window).resize(function(){

        wd = $(window);
        $(".container").width(wd.width()).height(wd.height());
        $(".content").each(function(){
            $(this)
                .css("margin-left", ($(this).width()/2*-1) + "px")
                .css("margin-top", ($(this).height()/2*-1) + "px");
        });

    }).resize();

    // 패럴랙스 스크롤 플러그인처리
    $(".bg-holder").parallaxScroll({
        friction : 0.3
    });

    // icon 이미지
    $('.icon img').hover(function(){

        $(this).attr("src", $(this).attr("src").replace(".png","_over.png"));

    }, function(){

        $(this).attr("src", $(this).attr("src").replace("_over",""));

    });

});
