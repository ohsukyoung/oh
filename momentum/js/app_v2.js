


console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

myName = "nicolas";
console.log("your new name is" + myName);

/* =================================== */
//2.4
//const amIFat = false;
const amIFat = null;
// - null: 아무것도 없는 것으로 채워넣음
console.log(amIFat);
let something;
// - undefined: 채워져있고 값이 없음
console.log(something);

/* =================================== */
//2.5
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fir";
const sat = "sat";
const sun = "sund";

//const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
//const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
//console.log(daysOfWeek);

//const nonsense = [1, 2, "hello", false, null, true, undefined];
//console.log(daysOfWeek,nonsense);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Get Item from Array
console.log(daysOfWeek[4]);
//-- 인덱스는 0부터 시작

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);
//-- array목적: 하나의 veriable안에 데이터 list 갖는것


const toBuy = ["potato", "tomato","pizza"];
toBuy.push("kimbab");

/* =================================== */
//2.6

console.log("hi");

const playerName = "nico";
const palyerPoints = 121212;
const palyerHandSome = false;
const PlayerFat = "little bit";

//player[0] == name
//player[1] == points
const player1 = ["nico", 1212, false, "little bit"];

//--object
const player2 = {
    //특성
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player2);
console.log(player2.name);
console.log(player2["name"]);

console.log(player2);
player2.fat = false;
player2.lastName = "phtat";
console.log(player2);
player2.points = player2.points+15;
console.log(player2);

/* ====================================================================== */
//2.7 -----------
//-- funtion
// 무분별하게 반복적 코드 좋지않음.
// 캡슐화하여 반복

// console.log("Hello mya name is Nico");
// console.log("Hello mya name is Dal");
// console.log("Hello mya name is Shigatsu");

function sayHello(nameOfPerson, age){
    // console.log("Hello m name is C");
    // console.log(nameOfPerson);
    console.log("Hello m name is"+nameOfPerson+"and I'm "+age);
}

//2.8 ----------------------
// alert();
sayHello("nico", 10);   //-- 데이터 보내는 법
sayHello("dal", 23);
sayHello("lynn", 21);

//console.log("hello");
//sayHello("nico");   //-- 괄호쓰는것: 실행버튼 누르는 것

//-- 계산기 만들기
function plus(firstNumber,secondNumber){
    console.log(firstNumber+secondNumber);
}
function divide(a,b){
    console.log(a/b);
}

//plus();               //--==>> NaN
plus(8,60);             //-- firstNumber, secondNumber 

const player={
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("helo! "+ otherPersonsName + "nice to meet you");
    },
}
console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");
//2.9 ----------------------
const a9 = 5;
console.log(a9);

// const isNicoFat = true;
// isNicoFat = false;
//--==>> const 값 없데이트 못해서 오류

let isNicoFat = true;   // 선언
isNicoFat = false;      // 값 업데이트

// boolean: true || false
// String
// const a10 = null; // null: 비어있음을 나타냄

let hello;
console.log(hello); //undefined: 변수에 값을 지정하지 않은 상태

const me = "sexy";
const days = [1, 2, false, true, null, undefined, "text", me];    //array

const toBuy1 = ["potato", "tomato", "pizza"];
//                 0          1         2

console.log(toBuy[2]);
//--==>> pizza
toBuy[2] = "Water";
console.log(toBuy);
//--==>> ['potato', 'tomato', 'Water', 'kimbab']
toBuy.push("one");
console.log(toBuy);
//--==>> ['potato', 'tomato', 'Water', 'kimbab', 'one']
//2.10 ----------------------
// list는 공통된 맥락이 있다는 점이 장점
// 하지만 의미있는 property를 그룹으로 묶을때 어려움 있음

const player3={
    name: "Nico",
    age: 98,
};
// 오브젝트

// console.log(player3, console);  // 둘다 object
player3.name="nicolas";
console.log(player3);
//--==>> {name: 'nicolas', age: 98}
//      자바스크립트는 위에서 아래로 읽어들임
player3.saxy="soon";
console.log(player3);
//--==>> {name: 'nicolas', age: 98, saxy: 'soon'}

//function 어떤 것을 캡슐화하여 반복하는 것
function plus(potato,salad){    //-- 값을 받을 때 () 안에 적기
    console.log(potato+salad);
}

//plus;     //--==>> function을 이렇게 적으면 X
plus();     //--==> function() → 괄호가 중요
plus();

plus(5, 10); //-- function 안으로 data 보내기
plus(1.33453,9898); // 순서가 중요
plus(9898, 1.33453);

function minuseFive(potato){    //-- 값을 받을 때 () 안에 적기
    console.log(potato-5);
}

minuseFive(5, 10, 12, 34, 4, 5, 6, 7);  //많은 값을 보내더라도 argument대로만 값을 받음
//--==>> 0

const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    times: function(a,b){
        console.log(a*b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    power: function(a,b){
        console.log(a**b);
    }
}

calculator.add(5,1);
calculator.minus(5,1);
calculator.times(5,1);
calculator.divide(5,1);
console.log(calculator);
//2.11 (Returns) ----------------------

console.log(calculator.add(2,3));
//--==>> undefined → 현재에선 값을 기록할 뿐 가져올 수 없음

const age =90;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
    // funciton 안의 return → 반환값
}

const krAge = calculateKrAge(age);

console.log(krAge);
//-->> 92


const calculator2 = {
    plus: function(a,b){
        console.log("hello");   //실행됨
        return a+b;
        console.log("byebye");  //실행되지 않음
    },
    minus: function(a,b){
        return a-b;
    },
    times: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    }
}

const plusResult = calculator2.plus(2,3);
const minusResult = calculator2.minus(plusResult,10);
const timesResult = calculator2.times(10,minusResult);
const divideResult = calculator2.divide(timesResult, plusResult);
const powerResult = calculator2.power(divideResult,minusResult);
console.log(plusResult);

//2.12 (Recap) ----------------------
// console.log: 콘솔 결과를 보여주기 위한 것
// return: function 작동 멈추고 결과값 반환
//2.13 (Conditionals: 조건문) ----------------------
// ex. 사용자 로그인시 로그인 여부

// 음주가능한 나이인지 확인 계산기
//const age2 = prompt("How old are you?") 
//-- prompt: 사용자에게 입력값받기위해 띄워줌. 일시정지
//-- 더이상 사용하지 않는 이유 → 답하기 전까지 일시정지로 자바스크립트 정지됨. css 꾸미기불가능
console.log(typeof age);
//--==>> string
//-- typeof 값의 타입을 알려줌

// console.log(typeof "15", typeof parseInt("15"));
//--==>> string number
//-- parseInt: 형변환
// "15" => 15

console.log(typeof age, typeof parseInt(age));

// const age1 = parseInt(prompt("How old are you?"));
// console.log(age1);
//--==>> 숫자 → 숫자/ 문자 → NaN
//NaN: Not a Number
//2.14 (Conditionals part Two: 조건문) ----------------------
const age2 = parseInt(prompt("How old are you?"));
console.log(isNaN(age));
// isNaN: number true, false여부반환
console.log(isNaN(age));
if(isNaN(age)){
    console.log("Please write a number")
}else{
    console.log("Thank you for writing your age.")
}


/* =================================== */