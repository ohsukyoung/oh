const clockTitle = document.querySelector(".js-clock");
const clockTitle_01 = document.querySelector(".js-clock_01");


function getXMas(){
    // --------------------------------------------------- clockTitle_01 
    const year = new Date().getFullYear();    //-- 년도
    //               YYYY-MM-DDTHH:mm:ss.sssZ
    const ydms = `${year}-12-25T00:00:00`;    //-- 년-월-일-시간 형식
    const xMas_01 = new Date(ydms);      //--==>> Sun Dec 24 2023 00:00:00 GMT+0900 (한국 표준시)
    const now_01 = new Date();           //--==>> Wed Sep 13 2023 23:05:39 GMT+0900 (한국 표준시)

    const difference = new Date(xMas_01 - now_01);
    const secondsInMs = Math.floor(difference / 1000);
    const minutesInMs = Math.floor(secondsInMs / 60);
    const hoursInMs = Math.floor(minutesInMs / 60);
    const days = Math.floor(hoursInMs / 24);
    const seconds = secondsInMs % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;
    const daysStr = `${days < 10 ? `0${days}` : days}d`;
    const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
    
    clockTitle_01.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;

    // --------------------------------------------------- clockTitle 
    // 날짜 입력
    const now = new Date();                     // 오늘 년,월,일,시간,분,초
    const xMas_y = new Date().getFullYear();    // 올해 년도
    const xMas = new Date(`${xMas_y}-12-25T00:00:00`);  //크리스마스(yyyy.12.25)

    // 연산
    let diff = xMas - now;

    const d_seconds = String(Math.floor((diff / 1000) % 60)).padStart(2,"0");
    diff = diff / 1000;
    const d_minutes = String(Math.floor((diff / 60) % 60)).padStart(2,"0");
    diff = diff / 60;
    const d_hours = String(Math.floor((diff / 60) % 24)).padStart(2,"0");
    diff = diff / 60;
    const d_days = String(Math.floor(diff / 24)).padStart(2,"0");

    // 출력
    clockTitle.innerText = `${d_days}d ${d_hours}h ${d_minutes}m ${d_seconds}s`;
};

getXMas();
setInterval(getXMas, 1000);