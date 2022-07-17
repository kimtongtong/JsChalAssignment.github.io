
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const helloMaster = document.querySelector("#hello-master");

const HIDDEN_KEY = "hidden";
const MASTER_KEY = "mastername";

function onloginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_KEY);
    const masterName = loginInput.value;
    localStorage.setItem("mastername", masterName);
    paintMaster(masterName);
}

function paintMaster(masterName) {
    helloMaster.innerText = `HELLO ${masterName}`;
    helloMaster.classList.remove(HIDDEN_KEY);
}

loginForm.addEventListener("submit", onloginSubmit);

const savedMastername = localStorage.getItem(MASTER_KEY);

if (savedMastername === null) {
    loginForm.classList.remove(HIDDEN_KEY);
    loginForm.addEventListener("submit", onloginSubmit);
} else {
    paintMaster(savedMastername); 
}