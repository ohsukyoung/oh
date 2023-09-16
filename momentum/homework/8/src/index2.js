const clockTitle = document.querySelector(".js-clock");
const clockTitle_01 = document.querySelector(".js-clock_01");

function getXMas() {                        //-- X-MAS 12월 25일
  // 입력받기 위한 형식
  const year = new Date().getFullYear();    //-- 년도
  //               YYYY-MM-DDTHH:mm:ss.sssZ
  const ydms = `${year}-12-25T00:00:00`;    //-- 년-월-일-시간 형식
  //12-24:00:00:00+0900
  
  // 날짜별 년도-월-일자-요일-시간-분-초
  const xMas = new Date(ydms);      //--==>> Sun Dec 24 2023 00:00:00 GMT+0900 (한국 표준시)
  const now = new Date();           //--==>> Wed Sep 13 2023 23:05:39 GMT+0900 (한국 표준시)

  const difference = new Date(xMas - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  console.log(days);
  console.log(days);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  console.log("hours: "+ hours);
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  
  clockTitle_01.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;


  let start = new Date();
  let today = new Date("2023-12-25T00:00:00");
  
  console.log({ start });
  console.log({ today });
  
  let diff = today - start; // today.getTime() - start.getTime()
  
  let d_seconds = Math.floor((diff / 1000) % 60);
  diff = diff / 1000
  let d_minutes = Math.floor((diff / 60) % 60);
  diff = diff / 60
  let d_hours = Math.floor((diff / 60) % 24);
  diff = diff / 60
  let d_days = Math.floor(diff / 24);
  
  console.log({ d_seconds, d_minutes, d_hours, d_days });

  clockTitle.innerText = `${d_days} ${d_hours} ${d_minutes} ${d_seconds}`;

console.log('min : ');


//   const hours = String(now.getHours()).padStart(2, "0");
//   clockTitle.innerText = `${month}d ${hours}h ${minues}m ${seconds}s`;
}

getXMas();
// setInterval(getXMas, 1000);

