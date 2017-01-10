$(document).ready(function(){

  // 브라우저의 높이를 section의 높이로 지정
  var height = $(window).height();
  $("section").height(height);

  // 브라우저 사이즈가 변경될 때마다 section 높이를 변경
  $(window).on("resize", function(){

    var height = $(window).height();
    $("section").height(height);

  });

  // 스크롤시 해당 영역 메뉴 활성화
  $(window).on("scroll", function(){

    var height = $(window).height();
    var scroll = $(window).scrollTop();

    for(var i=0; i<5; i++){

      if(height*i <= scroll && scroll < height*(i+1)){
        $("#menu li").removeClass();
        $("#menu li").eq(i).addClass("on");
      }

    }

  });

  // 스크롤시 화면 영역으로 자동 화면 스크롤
  $("section").on("mousewheel", function(event, delta){

    if(delta > 0){

      var prev = $(this).prev().offset().top;

      $("html,body").stop().animate({
        "scrollTop" : prev
      }, 1400, "easeOutBounce");

    } else if(delta < 0) {

      var next = $(this).next().offset().top;

      $("html, body").stop().animate({
        "scrollTop" : next
      }, 1400, "easeOutBounce");

    }

  });

  // 메뉴 클릭시 자동으로 상하 스크롤 시키기
  $("#menu li").on("click", function(e){

    e.preventDefault();

    var height = $(window).height();
    var i = $(this).index();
    var nowTop = i * height;

    $("html, body").stop().animate({
      "scrollTop" : nowTop
    }, 1400);

  });

});
