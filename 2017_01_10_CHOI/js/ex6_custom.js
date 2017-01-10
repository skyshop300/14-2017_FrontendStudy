$(document).ready(function(){

  var articleSize = $("article").length;
  var sectionWidth = 200 * articleSize;
  var totalWidth = sectionWidth + 600;

  $("section").width(totalWidth);
  $("body").height(sectionWidth);

  // 처음 열릴 때
  $("html, body").scrollTop(sectionWidth);

  // 화면 스크롤 시
  $(window).on("scroll", function(){

    var scroll = $(this).scrollTop();

    $("section").stop().animate({
      "left" : -scroll
    }, 600);

  });

  // article 열리고 닫힘 효과
  $("article h2").on("click", function(e){

      e.preventDefault();

      var index = $(this).parent().index();
      var src = $(this).children("a").attr("href");
      var articlePosition = 200 * index;

      $("article").removeClass("on");
      $(this).parent().addClass("on");
      $("article p img").attr({"src" : ""});
      $(this).siblings("p").children("img").attr({"src" : src});
      $("html, body").scrollTop(articlePosition);

  });

  // 닫힘버튼을 눌렀을 때
  $("span").on("click", function(){

    $("article").removeClass("on");

  });

  // navigation 버튼을 클릭했을 때
  $("#navi li").on("click", function(){

    var i = $(this).index();
    var positionNavi = 1000 * i;
    $("#navi li, article").removeClass();
    $(this).addClass("on");
    $("html, body").scrollTop(positionNavi);

  });
  
});
