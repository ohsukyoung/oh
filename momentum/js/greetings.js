const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username"; 
 
// ① h1,form모두 hidden
// ② localStorage에 없는 값을 불러올때: O (null)
//      form .hidden클래스 제거
//      
// ③ form 눌렀을 떄
//      form 기본기능 제거
//      username localStorage에 저장
//      username h1에 표시
//      h1에 .hidden클래스 제거
// ④ localStorage에 없는 값을 불러올때: X(username 있을 때)
//      username h1에 표시
//      h1에 .hidden클래스 제거
 
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
};
 
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
 
const savedUsername = localStorage.getItem(USERNAME_KEY);
 
if(savedUsername === null){ 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}