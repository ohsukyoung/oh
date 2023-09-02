//스크롤 시 가로로이동
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
    
    //sec1: 이미지 색
    if(wScroll > 400){
        $("#sec2 .imgs img").addClass("on");
    } else if (wScroll == 0){
        $("#sec2 .imgs img").removeClass("on");
    };
        
    //se2: bg1_2(2)이미지 움직임
    if(wScroll < 700){
        $(".img_animate > img").css({ "transform": "translateX("+imgScroll+"px )" });
    };
    
    //sec5: .sTitle 글씨 움직임
    var d = $(".site1").offset().top;
    console.log(d)
    var offset2 = (wScroll - 9000);
    $(".site1 .sTitle").css({"transform":"translateY(" + offset2 +"px)"});
    if(wScroll > 9200){
        $(".site1").addClass("show");
    }
    
    //sec6: 애니메이션1 see code
    var modal=$('#layer_wrap');
    var close=$('.close');
    $('.aml_1').on('click',function(e){
        e.preventDefault();
        $('.layer01').css('display','block');
        $('.layer01 .close').css('display','block');
        $('#sec6 .am1').addClass('anion');
        $('.layer01').slideDown();
    });
    $('.aml_2').on('click',function(e){
        e.preventDefault();
        $('.layer02').css('display','block');
        $('.layer02 .close').css('display','block');
        $('#sec6 .am2').addClass('anion');
        $('.layer02').slideDown();
    });
    $('.aml_3').on('click',function(e){
        e.preventDefault();
        $('.layer03').css('display','block');
        $('.layer03 .close').css('display','block');
        $('#sec6 .am3').addClass('anion');
        $('.layer03').slideDown();
    });
    $('.aml_4').on('click',function(e){
        e.preventDefault();
        $('.layer04').css('display','block');
        $('.layer04 .close').css('display','block');
        $('#sec6 .am4').addClass('anion');
        $('.layer04').slideDown();
    });
    $('.aml_5').on('click',function(e){
        e.preventDefault();
        $('.layer05').css('display','block');
        $('.layer05 .close').css('display','block');
        $('#sec6 .am5').addClass('anion');
        $('.layer05').slideDown();
    });
    close.on('click',function(e){
        e.preventDefault();
        $('#sec6 #layer_wrap > div').css('display','none');
        $('.ani_wrap > div').removeClass('anion');
        $('.close').slideUp();
        $('#layer_wrap').css('display','block');
    });
    
});

//sec1: 현재시간 표시
setInterval(function showClock(){
    var t = new Date().toLocaleString();  
    var time = t.slice(16,24);
    if(t.slice(14,16) == "오전") $(".time").text(time+" "+"AM");
    else $(".time").text(time+" "+"PM");
},1000);

//sec1: 날짜표시
var d = new Date().toLocaleString();
    //2019. 11. 1. 오후 1:46:22
    var year = d.slice(0,5);
    var month = d.slice(6,9);
    var day = d.slice(10,13);
    $("#sec3 .me2 .date p.d1").text(month);
    $("#sec3 .me2 .date p.d2").text(day);
    $("#sec3 .me2 .date p.d3").text(year);

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

//sec3: 글자 이미지표시
//$('#sec3 .me_wrap .img1').hide();
//
//$('.me_wrap .me_t .i').hover(function(){
//    $('#sec3 .me_wrap .img1').stop().fadeIn(250);
//    $("#sec3 .me_wrap .me_t .i").addClass("ion");
//},function(){
//    $('#sec3 .me_wrap .img1').hide();
//    $("#sec3 .me_wrap .me_t .i").removeClass("ion")
//});







