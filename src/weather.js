//날씨 함수에서는 navigator 함수를 사용한다//
const API_KEY = "1612ca150a59a697baa79bf2b766a295";

function GeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}
    //resopnse.json은 현재 url안에 있는 값들//

function GeoError() {
    alert("당신의 위치를 찾을 수 없습니다...");
}



//우리는 위치를 알려주기 위해 latitude 와 longitude 값을 받아야 한다.//
navigator.geolocation.getCurrentPosition(GeoOK, GeoError);