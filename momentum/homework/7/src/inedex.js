const rdForm = document.querySelector(".rd_form"); //-- 폼

const rdInputLastNum = document.querySelector(".rd_form input.last_num "); //-- 입력: 마지막 숫자
const rdInputUserNum = document.querySelector(".rd_form input.user_num"); //-- 입력: 사용자 숫자

const rdUserPrint = document.querySelector(".rd_form .user_print"); //-- 출력: 사용자 숫자
const rdComPrint = document.querySelector(".rd_form .com_print"); //-- 출력: 컴퓨터 숫자
const rdMessage = document.querySelector(".rd_form .message"); //-- 출력: 메세지
const rdResult = document.querySelector(".rd_form .result"); //-- 최종 출력: 결과

const rdPrint = document.querySelector(".rd_form .print"); //-- CSS 처리:  메세지 출력 hidden 처리

const HIDDEN_CLASSNAME = "hidden";

// 입력
function onGameSubmit(event) {
  event.preventDefault(); //--기존 이벤트 막기
  rdPrint.classList.remove(HIDDEN_CLASSNAME);

  // 입력받기기
  const lastnum = rdInputLastNum.value; //-- 입력받은 마지막 숫자 저장
  const usernum = rdInputUserNum.value; //-- 입력받은 마지막 숫자 저장

  printMessage(usernum, lastnum);
}

// 출력
function printMessage(usernum, lastnum) {
  rdUserPrint.innerText = `${usernum}`; //-- 출력: 사용자에게 받은 숫자

  const random = Math.ceil(Math.random() * lastnum); //-- 연산: 랜덤함수 생성
  rdComPrint.innerText = `${random}.`; //-- 출력: 랜덤함수 출력

  if (usernum > random) {
    // 이김: 사용자가 랜덤함수보다 클 때
    rdResult.innerText = "You Won!";
  } else if (usernum == random) {
    // 비김: 사용자와 랜덤함수 같을 때
    rdResult.innerText = "It's the same";
  } else {
    // 짐: 사용자가 랜덤함수보다 작을 때
    rdResult.innerText = "You lost!";
  }
}

rdForm.addEventListener("submit", onGameSubmit); //-- play 버튼 눌렀을때 실행
