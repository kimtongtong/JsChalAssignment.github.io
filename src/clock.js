
const clock = document.querySelector("h1#clock");

function nowClockEvent() {
    const nowDate = new Date();
    const nowHours = String(nowDate.getHours()).padStart(2,"0");
    const nowMinutes = String(nowDate.getMinutes()).padStart(2,"0");
    const nowSeconds = String(nowDate.getSeconds()).padStart(2,"0");
    clock.innerText = `${nowHours} ${nowMinutes} ${nowSeconds}`
}

nowClockEvent();
setInterval(nowClockEvent, 1000);

