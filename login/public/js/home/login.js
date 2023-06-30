"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href="/";
            }
            else{
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("login error"));
        })
 }
 'use strict'

//scroll animation(newhome.html)
// let mainText = document.querySelectorAll('.text');
// window.addEventListener('scroll', function(){
//     let value = window.scrollY;


// })


// 면접관용 버튼(왼쪽) 눌렀을 때, 이벤트 화면 생성 함수
function handleLeftButtonClick(){
    // 클릭할 왼쪽 버튼 요소 가져오기
    let leftButton = document.getElementById('left-button');
    // 버튼 초기 위치 계산 (나머지 요소 숨기기 전의 위치)
    const leftButtonRect = leftButton.getBoundingClientRect();
    const initialLeft = leftButtonRect.left;
    const initialTop = leftButtonRect.top;
    // 나머지 요소 숨기기
    let otherElements = document.getElementsByClassName('notLeftButton');
    for (let i=0; i<otherElements.length; i++) {
        otherElements[i].style.display = 'none';
    }
    // 왼쪽 버튼 포함 section2 style 변경 및 내부요소 추가
    let buttonSection = document.getElementById('button-section2');
    buttonSection.style.cssText = "position:relative; flex-direction:column; height:700px;";
    buttonSection.innerHTML += '<div id="event-container"></div>';
    // event-container 추가
    let eventContainer = document.getElementById('event-container');
    eventContainer.style.cssText = `position: absolute; margin: 5% auto; display: flex; flex-direction:column; flex-wrap: wrap; width: 70%; height: 450px; transition: 1s; align-items: center; background-color: rgba(0, 0, 0, 0.3); border:1px solid #ffa24b97; border-radius: 20px;`;
    eventContainer.style.animation = 'appear 1s ease-out forwards';
    // 왼쪽 버튼에 애니메이션 클래스 추가 후 위치 적용
    leftButton = document.getElementById('left-button'); // (질문) 왜 여기서 다시 한번 더 선언해줘야 적용되는거지
    leftButton.innerHTML = "<p>면접 이벤트 생성</p>";
    leftButton.style.cssText = `position:absolute; left:${initialLeft}px; top:${initialTop}px; margin: 0; padding: 1rem 2rem; font-size: clamp(1rem, 1.5vw, 2rem); border-radius: 1em;`;
    leftButton.style.animation = 'moveLeftButton 0.8s ease-out forwards';
}
//면접관용 버튼에 클릭 이벤트리스너 추가
let leftButton = document.getElementById('left-button');
leftButton.addEventListener('click', handleLeftButtonClick, {once: true});

// 면접 이벤트 불러오기 + 저장하기 과정 필요


// 면접 이벤트 불러오기 (캘린더 + form)
