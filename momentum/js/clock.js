const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // const hours = date.getHours().padStart;
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

getClock(); 
setInterval(getClock, 1000);

/*
//padStart(): string에 쓸 수있는 function
"1".padStart(2,"0");    //2글자가 아니라면 앞에 0추가
//--==> "01"
"12".padStart(2,"0");    //2글자가 아니라면 앞에 0추가
//--==>> "12"
"1".padEnd(2,"0");      //2글자가 아니라면 앞에 0추가
//--==>> "10"

"hello",padStart(20,"x");
//--==>> "xxxxxxxxxxxxxxxhello"

new Date().getHours();
//--==>> 19 → 숫자
String(new Date().getHours());
//--==>> "19" → 문자
*/

