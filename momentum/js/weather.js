const API_KEY = "b579e0a3c888bb5836411ef193d46ba6";

function onGeOk(position){
    // console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("Yout live in", lat, lon);
    //--==>> Yout live in 37.5518911 126.9917937
    
    // {lat}=37.5518911
    // {lon}=126.9917937
    // {API key}= 나의 프로필>API keys(이메일 인증 확인필요)
    
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // https://api.openweathermap.org/data/2.5/weather?lat=37.5518911&lon=126.9917937&appid=b579e0a3c888bb5836411ef193d46ba6
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    // fetch(url);
    fetch(url).then(response => response.json().then(data => {
        // console.log(data.name, data.weather[0].main)
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeOk, onGeoError)// :user 위치(gelocation)
//getCurrentPosition(성공시 실행 함수, 실패시 실행 함수)



