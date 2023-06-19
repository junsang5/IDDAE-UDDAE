"use strict";

const name = document.querySelector("#name");
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#passwordCheck");
const registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert("please input id");
    if(password.value!==passwordCheck.value) return alert("password is not accord");
    const req = {
        name: name.value,
        id: id.value,
        password: password.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href="/login";
            }
            else{
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("register error"));
        })
 }