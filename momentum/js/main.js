/* main_bg ============================================ */

const mainBg = document.body.querySelector(".box.main_bg");
const bgImage = document.body.querySelector(".box.main_bg img");
const images = ["dream001.jpg", "dream002.jpg", "dream003.jpg", "dream004.jpg", "dream005.jpg", "dream006.jpg", "dream007.jpg", "dream008.jpg", "dream009.jpg", "dream010.jpg",];

// 배경이미지 랜덤노출
function bgRandom(){
    const chosenImage = String(images[Math.floor(Math.random()*images.length)]).padStart(3,"0");
    // const bgImage = document.createElement("img");
    bgImage.src = `img11/${chosenImage}`;
    // console.dir(bgImage);
    // mainBg.appendChild(bgImage);
}
bgRandom();
setInterval(bgRandom, 10000);



/* login ============================================ */
const loginForm = document.querySelector(".box.login");
const loginInput = document.querySelector(".box.login input");
const greeting = document.querySelector(".box.login .greeting");

const HIDDEN_CLASSNAME = "blind";
const USERNAME_KEY = "username";

// 로그인 값 가져오기
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
};

// 로그인 값 출력
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로그인값이 로컬스토리지에 없는 경우
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}

/* weather ============================================ */
const API_KEY = "b579e0a3c888bb5836411ef193d46ba6";

// 위치 성공-위치값 가져와 날씨정보 갖오기
function onGeOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector(".box.weather span.w_txt");
        const wImgBox = document.createElement("span");
        const wImg = document.createElement("img");
        const temp = document.querySelector(".box.weather span.temp");
        const city = document.querySelector(".box.weather span.city");
        weather.innerText = `${data.weather[0].main}`;
        temp.innerText = `${data.main.temp}`;
        city.innerText = data.name;
        weather.parentNode.prepend(wImgBox);
        wImgBox.prepend(wImg);
        wImgBox.classList.add('w_ico');
        wImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }));
}

// 위치 실패
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeOk, onGeoError)


/* clock ============================================ */
const clock = document.querySelector(".box.clock .clck_txt");

// 현재 시간
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

getClock(); 
// setInterval(getClock, 1000);


/* todo ============================================ */
const toDoForm = document.querySelector(".box.todo form");
const toDoInput = toDoForm.querySelector(".box.todo input");
const toDoList = document.querySelector(".box.todo .todo_list");
const listDefault = document.querySelector(".box.todo .todo_list .default");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(typeof li.id);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos();
    li.remove();
    // toDoDesc();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.classList.add('btn_base');
    span.innerText = newTodo.text;
    button.innerText = "×";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

/*
function toDoDesc(){
    console.log("0: " +toDoList.children.length);
    if(toDoList.children.length >= 2){
        console.log("리스트: "+toDoList.children.length);
        listDefault.classList.add(HIDDEN_CLASSNAME);
    }else{
        console.log("2: "+toDoList.children.length);
        listDefault.classList.remove(HIDDEN_CLASSNAME);
    }
}
toDoDesc();
*/


/* quote ============================================ */

const quotes = [
    {
        quote: '\'밤의 안녕\'을 빌어 준다는 건 적어도 당신이 잠자리에서만큼은 모든 것에서 자유로워지기를, 평소보다 조금은 가벼운 아침을 맞이할 수 있기를 바란다는 그런의미가 아닐까.',
        author: '「\"힘내\"를 대신할 말을 찾았다」-김예란'
    },
    {
        quote: '건강한 정신을 유지하기 위해, 덜 불행해지기 위해, 오늘도 잊기 위해 퇴근 후 바지런히 책을 읽고 운동을 할 것이다.',
        author: '「\"힘내\"를 대신할 말을 찾았다」-김예란'
    },
    {
        quote: '언제든 도망칠 수 있다는 마음을 지니고 있어야 자신의 몸과 정신을 지키며 오래도록 일할 수 있다.',
        author: '「\"힘내\"를 대신할 말을 찾았다」-김예란'
    },
    {
        quote: '지치지 않고, 조급해하지 않고, 주변의 새로운 가능성과 소중한 것을 놓치지 않고 걸어갈 수 있다.',
        author: '「\"힘내\"를 대신할 말을 찾았다」-김예란'
    },
    {
        quote: '스스로를 몰아붙이지 않고 건강하게 일상을 건너갈 수 있다.',
        author: '「\"힘내\"를 대신할 말을 찾았다」-김예란'
    },
    {
        quote: '삶은 너무도 비열하지만, 우리 끝까지 지구에 발붙이고 씩씩하게 살아가자. 다시 또각또각 걸어가자.',
        author: '「\"힘내\"를 대신할 말을 찾았다」-김예란'
    },
    {
        quote: '아무 일도 일어나지 않아서 놀랍도록 지루한 하루였지만 애쓰지 않고 무난히 흘려보내도 되는 오늘이라 참 좋구나.',
        author: '「그냥 좋으니까 좋아」-조유미'
    },
    {
        quote: '너 스스로를 믿기 어렵다면 너를 믿고 있는 나를 믿어봐줄래?',
        author: '「그냥 좋으니까 좋아」-조유미'
    },
    {
        quote: '다 잘되지 않아도 내가 늘 곁에 있을 거라는 말은 해줄 수 있으니까',
        author: '「그냥 좋으니까 좋아」-조유미'
    },
    {
        quote: '\"그게 뭐든 너라면 그냥 좋아\" 진실로 좋아하는 건 마음에 화살처럼 날아들어 단번에 꽂혀버린 거라 이유 같은 건 조재할 틈도 없을 테니 말이다',
        author: '「그냥 좋으니까 좋아」-조유미'
    },
];

const quote = document.querySelector(".box.quote .quote_txt");
const author = document.querySelector(".box.quote .quote_desc");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



