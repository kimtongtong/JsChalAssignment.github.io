const container = document.querySelector("body");

const randBackground = [
  "0.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
]

const numOfBack = randBackground[Math.floor(Math.random() * randBackground.length)];

// const bgImage = document.createElement("img")

container.style.backgroundImage = `url(img/${numOfBack})`;

// bgImage.src = `img/${numOfBack}`;

// document.body.appendChild(bgImage); 
//appendChild는 코드가 html에서의 순서를 정해주는 함수이다. 제일 아래에 코드를 넣음 prepend()는 가장 위에 코드를 위치 시켜준다.//