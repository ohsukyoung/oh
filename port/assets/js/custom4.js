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
    var cont = $('#contents > section');
    if(wScroll >= cont.eq(0).width()*(5/7)){
        $("#sec2 .imgs img").addClass("on");
    }else{
        $("#sec2 .imgs img").removeClass("on");
    };
    
    //sec1: 날짜표시
    var d = new Date().toLocaleString();
        //2019. 11. 1. 오후 1:46:22
        var year = d.slice(0,5);
        var month = d.slice(6,9);
        var day = d.slice(10,13);
        $("#sec3 .me2 .date p.d1 > span:nth-child(1)").text(month.slice(0,1));
        $("#sec3 .me2 .date p.d1 > span:nth-child(2)").text(month.slice(1,2));
        $("#sec3 .me2 .date p.d2 > span:nth-child(1)").text(day.slice(0,1));
        $("#sec3 .me2 .date p.d2 > span:nth-child(2)").text(day.slice(1,2));
        $("#sec3 .me2 .date p.d3 > span:nth-child(1)").text(year.slice(0,1));
        $("#sec3 .me2 .date p.d3 > span:nth-child(2)").text(year.slice(1,2));
        $("#sec3 .me2 .date p.d3 > span:nth-child(3)").text(year.slice(2,3));
        $("#sec3 .me2 .date p.d3 > span:nth-child(4)").text(year.slice(3,4));

    //sec2: index2
//    $('#sec3btn_2').on('click', function(e){
//        var indexScroll = document.getElementById('sec3btn_2');
//        var indexNum  = indexScroll.dataset.class;
//        if(true){
//            e.preventDefault();
//            $('html, body').animate({scrollTop:indexNum}, 400);
//        }
//    });
//    $('#sec4btn_2').on('click', function(e){
//        var indexScroll = document.getElementById('sec4btn_2');
//        var indexNum  = indexScroll.dataset.class;
//        if(true){
//            e.preventDefault();
//            $('html, body').animate({scrollTop:indexNum}, 400);
//        }
//    });
//    $('#sec5btn_2').on('click', function(e){
//        var indexScroll = document.getElementById('sec5btn_2');
//        var indexNum  = indexScroll.dataset.class;
//        if(true){
//            e.preventDefault();
//            $('html, body').animate({scrollTop:indexNum}, 400);
//        }
//    });
//    $('#sec6btn_2').on('click', function(e){
//        var indexScroll = document.getElementById('sec6btn_2');
//        var indexNum  = indexScroll.dataset.class;
//        if(true){
//            e.preventDefault();
//            $('html, body').animate({scrollTop:indexNum}, 400);
//        }
//    });
    
    //sec2: bg1_2(2)이미지 움직임
    /*if(wScroll < 700){
        $(".img_animate > img").css({ "transform": "translateX("+imgScroll+"px )" });
    };*/
    
    //sec3: 이미지 색
    var cont = $('#contents > section');
    if(wScroll >= 4400){
        $("#sec3 .me2 .m_img img").addClass("on");
    }else if(wScroll < 4400){
        $("#sec3 .me2 .m_img img").removeClass("on");
    }
    
    //#sec3: .me_wrap .img1 글자위 이미지
    $(".me_wrap .img1").hide(); 
    $(".me_wrap").hover(function(){
        $(this).find(".img1").show(100);
    },function(){
        $(this).find(".img1").hide(100);
    });
    $(".me_wrap").mousemove(function(e){
        $(".me_wrap .img1").css("left", e.offsetX - 150).css("top",e.offsetY);
    });
    
    //sec5: .sTitle 글씨 움직임
    /*var d = $(".site1").offset().top;
    console.log(d)*/
    var offset2 = (wScroll - 9000);
    var offset2_2 = -(wScroll -9000 - 2000);
    var offset2_3 = (wScroll -9000 - 2000 -2400);
    var offset2_4 = -(wScroll -9000 - 2000 -2400 -2300);
    var offset2_5 = (wScroll -9000 - 2000 -2400 -2300 -2000);
    $(".site1 .sTitle").css({"transform":"translateY(" + offset2 +"px)"});
    $(".site2 .sTitle").css({"transform":"translateY(" + offset2_2 +"px)"});
    $(".site3 .sTitle").css({"transform":"translateY(" + offset2_3 +"px)"});
    $(".site4 .sTitle").css({"transform":"translateY(" + offset2_4 +"px)"});
    $(".site5 .sTitle").css({"transform":"translateY(" + offset2_5 +"px)"});
    
    //sec5: .sbox2 pc 움직임
    if(wScroll > 9200){
        $(".site1").addClass("on");
    }
    if(wScroll > 11700){
        $(".site2").addClass("on");
    }
    if(wScroll > 13900){
        $(".site3").addClass("on");
    }
    if(wScroll > 16100){
        $(".site4").addClass("on");
    }
    if(wScroll > 18300){
        $(".site5").addClass("on");
    }
    
    //sec5: .sbox2 ipad 움직임
    if(wScroll < 10550){
        var ip = (wScroll-9850);
        $(".site1 .sbox2").css({"transform":"translateX(" + ip/4 +"px)"});
    }
    if(wScroll < 12800){
        var ip = (wScroll-12100);
        $(".site2 .sbox2").css({"transform":"translateX(" + ip/4 +"px)"});
    }
    if(wScroll < 15200){
        var ip = (wScroll-14500);
        $(".site3 .sbox2").css({"transform":"translateX(" + ip/4 +"px)"});
    }
    if(wScroll < 16900){
        var ip = (wScroll-16900);
        $(".site4 .sbox2").css({"transform":"translateX(" + ip/4 +"px)"});
    }
    if(wScroll < 19300){
        var ip = (wScroll-19300);
        $(".site5 .sbox2").css({"transform":"translateX(" + ip/4 +"px)"});
    }
    

    //sec6: see code버튼 애니메이션
    $(".aml_1").click(function(e){
        e.preventDefault();
        $("#modal").removeClass().addClass("one");
        $("#modal.one .modal-bg > div:nth-child(1)").css({ "z-index": "100" });
    });
    $(".aml_2").click(function(e){
        e.preventDefault();
        $("#modal").removeClass().addClass("one");
        $("#modal.one .modal-bg > div:nth-child(2)").css({ "z-index": "100" });
    });

    $(".aml_3").click(function(e){
        e.preventDefault();
        $("#modal").removeClass().addClass("one");
        $("#modal.one .modal-bg > div:nth-child(3)").css({ "z-index": "100" });
    });

    $(".aml_4").click(function(e){
        e.preventDefault();
        $("#modal").removeClass().addClass("one");
        $("#modal.one .modal-bg > div:nth-child(4)").css({ "z-index": "100" });
    });
    $(".aml_5").click(function(e){
        e.preventDefault();
        $("#modal").removeClass().addClass("one");
        $("#modal.one .modal-bg > div:nth-child(5)").css({ "z-index": "100" });
    });

    $(".close").click(function(e){
        e.preventDefault();
        $("#modal").addClass("out");
        $("#modal.one.out .modal-bg > div").css({ "z-index": "10" });        
    });
    
    
    /*전체 글씨 애니메이션*/
    var cont = $('#contents > section');
    //sec1
    if(wScroll >= 1900){
        cont.eq(1).addClass("show");
    }else if(wScroll < 1900){
        cont.eq(1).removeClass("show");
    }
    if(wScroll >= 3100){
        cont.eq(2).children('.me').addClass("show");
    }else if(wScroll < 3100){
        cont.eq(2).children('.me').removeClass("show");
    }
    if(wScroll >= 4400){
        cont.eq(2).children('.me2').addClass("show");
    }else if(wScroll < 4400){
        cont.eq(2).children('.me2').removeClass("show");
    }
    if(wScroll >= 5500){
        cont.eq(3).addClass("show");
    }else if(wScroll < 5500){
        cont.eq(3).removeClass("show");
    }
    if(wScroll >= 7300){
        cont.eq(4).addClass("show");
    }else if(wScroll < 7300){
        cont.eq(4).removeClass("show");
    }
    if(wScroll >= 9000){
        $('#sec5 .site1 .sbox2').addClass("on");
    }else if(wScroll < 9000){
        $('#sec5 .site1 .sbox2').removeClass("on");
    }
    if(wScroll >= 9400){
        $('#sec5 .site1 .sbox4').addClass("on");
    }else if(wScroll < 9400){
        $('#sec5 .site1 .sbox4').removeClass("on");
    }
    if(wScroll >= 11500){
        $('#sec5 .site2 .sbox2').addClass("on");
    }else if(wScroll < 11500){
        $('#sec5 .site2 .sbox2').removeClass("on");
    }
    if(wScroll >= 11900){
        $('#sec5 .site2 .sbox4').addClass("on");
    }else if(wScroll < 11900){
        $('#sec5 .site2 .sbox4').removeClass("on");
    }
    if(wScroll >= 13700){
        $('#sec5 .site3 .sbox2').addClass("on");
    }else if(wScroll < 13700){
        $('#sec5 .site3 .sbox2').removeClass("on");
    }
    if(wScroll >= 14100){
        $('#sec5 .site3 .sbox4').addClass("on");
    }else if(wScroll < 14100){
        $('#sec5 .site3 .sbox4').removeClass("on");
    }
    if(wScroll >= 16000){
        $('#sec5 .site4 .sbox2').addClass("on");
    }else if(wScroll < 16000){
        $('#sec5 .site4 .sbox2').removeClass("on");
    }
    if(wScroll >= 16400){
        $('#sec5 .site4 .sbox4').addClass("on");
    }else if(wScroll < 16400){
        $('#sec5 .site4 .sbox4').removeClass("on");
    }
    if(wScroll >= 18200){
        $('#sec5 .site5 .sbox2').addClass("on");
    }else if(wScroll < 18200){
        $('#sec5 .site5 .sbox2').removeClass("on");
    }
    if(wScroll >= 18600){
        $('#sec5 .site5 .sbox4').addClass("on");
    }else if(wScroll < 18600){
        $('#sec5 .site5 .sbox4').removeClass("on");
    }
    if(wScroll >= 19700){
        cont.eq(5).addClass("show");
    }else if(wScroll < 19700){
        cont.eq(5).removeClass("show");
    }
    if(wScroll >= 20300){
        $('#sec6 .am1').addClass("on");
    }else if(wScroll < 20300){
        $('#sec6 .am1').removeClass("on");
    }
    if(wScroll >= 20700){
        $('#sec6 .am2').addClass("on");
    }else if(wScroll < 20700){
        $('#sec6 .am2').removeClass("on");
    }
    if(wScroll >= 21100){
        $('#sec6 .am3').addClass("on");
    }else if(wScroll < 21100){
        $('#sec6 .am3').removeClass("on");
    }
    if(wScroll >= 21500){
        $('#sec6 .am4').addClass("on");
    }else if(wScroll < 21500){
        $('#sec6 .am4').removeClass("on");
    }
    if(wScroll >= 21900){
        $('#sec6 .am5').addClass("on");
    }else if(wScroll < 21900){
        $('#sec6 .am5').removeClass("on");
    }
    if(wScroll >= 23200){
        cont.eq(6).addClass("show");
    }else if(wScroll < 23200){
        cont.eq(6).removeClass("show");
    }
    if(wScroll >= 24000){
        $('#sec7 .c_bottom').addClass("on");
    }else if(wScroll < 24000){
        $('#sec7 .c_bottom').removeClass("on");
    }
});

//sec1: 현재시간 표시
setInterval(function showClock(){
    var t = new Date().toLocaleString();  
    var time = t.slice(16,24);
    if(t.slice(14,16) == "오전") $(".time").text(time+" "+"AM");
    else $(".time").text(time+" "+"PM");
},1000);



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







