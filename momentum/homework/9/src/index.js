const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const bg = document.querySelector("body");
  const bgBtn = document.querySelector(".bg_btn");

  const COL_LENGTH = 2;           //배열 총 갯수
  let cArr = [COL_LENGTH];        //배열 생성

  //배경 컬러 랜덤 생성
  function bgColor(){  
    let i=0;//index
    while (i < COL_LENGTH) {          //배열이 채워질때까지
        let r = Math.floor(Math.random() * colors.length);    //0~(colors 배열갯수 -1)
        // console.log("[i]"+i+"r: "+r);   // 랜덤 테스트
        if (!sameCheck(r)) {          // 같지 않으면
        cArr[i]=r;                    // 배열에 입력
        i++;
        }
        function sameCheck(r) {       // 같은 숫자있는지 체크 함수
        for (let j = 0; j < COL_LENGTH; j++) {    //0부터 배열갯수까지
            if(cArr[j]===r){          //같으면 true
                return true;
            }
        }
        return false;                 //다르면 false
        }
    }
    bg.style.background= `linear-gradient(45deg, ${colors[cArr[0]]}, ${colors[cArr[1]]})`;    
}
bgColor();
bgBtn.addEventListener("click",bgColor);  