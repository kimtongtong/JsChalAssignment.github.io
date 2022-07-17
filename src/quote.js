const quoteList = [
  {
    quote : "Love your self",
    author : "자신을 사랑하라"
  },
  {
    quote : "Don't well on the past",
    author : "과거에 연연하지 마라"
  },
  {
    quote : "목표를 위한 실패는 원인은 '나'가 아닌 '접근 방식'이다. ",
    author : "습관의 디테일"
  },
  {
    quote : "어떤 말이든 상황에 따라 달라진다.",
    author : "경험담"
  },
  {
    quote : "프로그래밍 공부를 하는 시점에서 나는 이미 '개발자'이다",
    author : "anonymous"
  },
  {
    quote : "나는 __한 후 __ 할 것이다. 그리고 성공하면 축하한다.",
    author : "습관의 디테일"
  },
  {
    quote : "내 인생의 주인공이 '나'라서 1인칭으로 볼 수 있다.",
    author : "anonymous"
  },
  {
    quote : "사람은 혼자서 살아갈 수 없다.",
    author : "anonymous"
  },
]

const quote = document.querySelector("#quote-form span:first-child");
const author = document.querySelector("#quote-form span:last-child");


  const randQuote = quoteList[Math.floor(Math.random() * quoteList.length)]
  quote.innerText = randQuote.quote;
  author.innerText = randQuote.author;

