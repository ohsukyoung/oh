
const quotes = [
    {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
    {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
    },
    {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'REid Hoffman'
    },
    {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
    },
    {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin'
    },
    {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
    },
    ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//-- Array 안에 어떻게 접근
//console.log(quotes[0]);
// console.log(quotes[10-1]); //-- (X)
//console.log(quotes[0-9]);   //-- (X)0-9까지의 숫자

//---------------아래는 콘솔에서 실행
/*
//-- (1) 랜덤으로 함수받기
//      문제: Math.random() 사용시 실수출력됨
Math.random();
//--==>> 0.6798957590399961 → 임의의 실수

Math.random() * 10;
//--==>> 6.798957590399961 

//-- (2) 방법 3가지
//-- (2-1) round(): 소숫점 반올림하여 정수출력
Math.round(0.2);
//--==>> 0
Math.round(0.5);
//--==>> 1
Math.round(1.2);
//--==>> 1
Math.round(1.5);
//--==>> 2

//-- (2-2) ceil(): 소숫점 올림
Math.ceil(0.2);
//--==>> 1
Math.ceil(0.5);
//--==>> 1
Math.ceil(1.2);
//--==>> 2
Math.ceil(1.5);
//--==>> 2

//-- (2-2) floor(): 소숫점 내림
Math.ceil(0.2);
//--==>> 0
Math.ceil(0.5);
//--==>> 0
Math.ceil(1.2);
//--==>> 1
Math.ceil(1.5);
//--==>> 1

//---------------
Math.floor(Math.random() * 10);
//-- 0 ~ 9까지의 정수 반환
*/
//---------------
// console.log(quotes[Math.floor(Math.random() * 10)]);
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//--==>> Do not try to be original, just try to be good. Paul Rand
