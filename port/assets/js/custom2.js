//body: 스크롤시 가로로 움지이기
var lastScrollTop=0;                            //현재 스크롤 값(제일 마지막 스크롤 값)
var conLength = $("#contents").width();         //전체 가로 값(15000)
$("body").css("height",conLength);              //전체 세로 값은 width 전체 값을 할당

$(window).scroll(function(){
    var wScroll = $(window).scrollTop();    
    var wWidth = $(window).width();              //현재 화면의 가로 값
    var wHeight = $(window).height();            //현재 화면의 세로 값
    var dHeight = $("body").height() - wHeight;  //전체 세로 값 - 현재 화면의 세로 값
    var wContents = conLength - wWidth;          //전체 가로값 - 현재 화면의 가로 값
    var step = wContents / dHeight;              //전체 가로 값 / 전체 세로 값
    var goLeft = wScroll * step;
    var imgScroll = $(window).scrollTop() - 1000;  

    $(".scroll_top").text(wScroll);
    $("#contents").css({ "transform": "translateX(-"+goLeft+"px )" });
    lastScrollTop = wScroll;
    
    //sec2: bg1_2(2)이미지 움직임
    if(wScroll < 700){
        $(".img_animate > img").css({ "transform": "translateX("+imgScroll+"px )" });
    };
    //sec2: 이미지 색
    if(wScroll > 400){
        $("#sec2 .imgs img").addClass("on");
    } else if (wScroll == 0){
        $("#sec2 .imgs img").removeClass("on");
    };

    //sec3: 글자 animation
    if(wScroll >= 2400){
        $(".m2_wrap").addClass("on");
    } else if (wScroll == 0){
        $("#sec3 .me_wrap span").removeClass("on");
    };
});


//sec1: 현재시간 표시
setInterval(function showClock(){
    var t = new Date().toLocaleString();  
    var time = t.slice(16,24);
    if(t.slice(14,16) == "오전") $(".time").text(time+" "+"AM");
    else $(".time").text(time+" "+"PM");
},1000);

//sec2: index2
$('#sec3btn_2').on('click', function(e){
    var indexScroll = document.getElementById('sec3btn_2');
    var indexNum  = indexScroll.dataset.class;
    if(true){
        e.preventDefault();
        $('html, body').animate({scrollTop:indexNum}, 400);
    }
});
$('#sec4btn_2').on('click', function(e){
    var indexScroll = document.getElementById('sec4btn_2');
    var indexNum  = indexScroll.dataset.class;
    if(true){
        e.preventDefault();
        $('html, body').animate({scrollTop:indexNum}, 400);
    }
});
$('#sec5btn_2').on('click', function(e){
    var indexScroll = document.getElementById('sec5btn_2');
    var indexNum  = indexScroll.dataset.class;
    if(true){
        e.preventDefault();
        $('html, body').animate({scrollTop:indexNum}, 400);
    }
});
$('#sec6btn_2').on('click', function(e){
    var indexScroll = document.getElementById('sec6btn_2');
    var indexNum  = indexScroll.dataset.class;
    if(true){
        e.preventDefault();
        $('html, body').animate({scrollTop:indexNum}, 400);
    }
});

//sec3: 날짜표시
var d = new Date().toLocaleString();    //2019. 11. 1. 오후 1:46:22
var year = d.slice(0,5);
var month = d.slice(6,9);
var day = d.slice(10,13);
$("#sec3 .me2 .date p.d1").text(month);
$("#sec3 .me2 .date p.d2").text(day);
$("#sec3 .me2 .date p.d3").text(year);

//sec3: 글자위에 이미지
$('#sec3 .me_wrap > img').hide();

$('.me_wrap span').hover(function(){
    $('#sec3 .me_wrap > img').stop().fadeIn(250);
},function(){
    $('#sec3 .me_wrap > img').hide();
});