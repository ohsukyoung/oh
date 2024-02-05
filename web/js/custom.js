//라이트박스
$(".lightbox").lightGallery({
    thumbnail: true, //썸네일
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

//윈도우팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명","팝업이름","옵션설정")
    //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("popup.html","popup01","width=800,height=590,left=50,top=50,scrollbars=0,toolbar=0, menubar=0");
});

//레이어팝업
$(".layer").click(function(e){
    e.preventDefault();
    //$("#layer").css("display","block");
    //$("#layer").show();
    //$("#layer").fadeIn();
    $("#layer").slideDown();
});
$("#layer .close").click(function(e){
    e.preventDefault();
    //$("#layer").css("display","none");
    //$("#layer").hide();
    //$("#layer").fadeOut();
    $("#layer").slideUp();
});

//탭메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active >ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
    /*siblings 형제*/
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//배너
//html 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 -> 제이쿼리 호출
$('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$('.gallery_img').slick({
    dots: true,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});

$('.pause').on('click', function(){
    $('.gallery_img').slick('slickPause');
});

$('.play').on('click', function(){
    $('.gallery_img').slick('slickPlay');
});

$('.prev').on('click', function(){
    $('.gallery_img').slick('slickPrev');
});

$('.next').on('click', function(){
    $('.gallery_img').slick('slickNext');
});

//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e){
    e.preventDefault(); //태그의 #기능 차단, t0 l0으로 이동차단
    //#cont_nav {display: block;}
    //$("#cont_nav").css("display","block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDawn(); -- 한번밖에 못씀
    //$("#cont_nav").toggle(); -- 펼치고 접고 가능
    //$("#cont_nav").fadeToggle(); -- 서서히 나타났다가 사라졌다가
    $("#cont_nav").slideToggle(200); //-- 제일 자연스러움
    //$(".tit .btn").addClass("on"); //한번만
    $(this).toggleClass("on"); //한번만
    //this 나자신을 나타냄
});

