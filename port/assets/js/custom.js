        var lastScrollTop = 0;									//현재 스크롤 값(제일 마지막 스크롤 값)
        var roadLength = $(".road").width();		//전체 가로 값(15000)
        $("body").css("height", roadLength);		//전체 세로 값은 width 전체 값을 할당

        $(window).scroll(function(){
            var wScroll = $(window).scrollTop();
            var wWidth = $(window).width();								//현재 화면의 가로 값
            var wHeight = $(window).height();							//현재 화면의 세로 값
            var dHeight = $("body").height() - wHeight;		//전체 세로 값 - 현재 화면의 새로 값
            var wRoad = roadLength - wWidth;							//전체 가로 값 - 현재 화면의 가로 값
            var step = wRoad/dHeight;											//전체 가로 값 / 전체 세로 값
            var goLeft = wScroll * step;

            $(".scroll_top").text(wScroll);
            $(".road").css({ "transform":"translateX(-"+ goLeft +"px )" });
            lastScrollTop = wScroll;
        });