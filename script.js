let date = document.getElementById("date");
let curDateElement = document.getElementById("curDate");
let resultElement = document.getElementById("result");
let calBtn = document.getElementById("calBtn");
//현재 날짜
let curDate = new Date();
//현재 년도
let curYear = curDate.getFullYear();
//현재 달(0~11)
let curMonth = curDate.getMonth() + 1;
//현재 일
let curDay = curDate.getDate();
//현재 요일
let dayOfWeek = curDate.getDay();

let dd = null;

switch (dayOfWeek) {
  case 0:
    dd = "일";
    break;
  case 1:
    dd = "월";
    break;
  case 2:
    dd = "화";
    break;
  case 3:
    dd = "수";
    break;
  case 4:
    dd = "목";
    break;
  case 5:
    dd = "금";
    break;
  case 6:
    dd = "토";
    break;
  default:
    day = "없는요일";
}
//현재 날짜 웹페이지에 출력
curDateElement.innerHTML = `${curYear}년 ${curMonth}월 ${curDay}일 ${dd}요일`;

function getDiffDay(selectedDate) {
  let diff = selectedDate - curDate;
  let diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diffDay;
}

calBtn.addEventListener("click", () => {
  // input태그에서 선택된 날짜문자열을
  // 날짜 객체로 변환
  //2024-07-02 -> 2024-07-02T00:00:00 ...
  let selectedDate = new Date(date.value);
  // 밀리초
  let diff = selectedDate - curDate;
  //날짜 차이
  let diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
  resultElement.innerHTML = `D-day까지 ${diffDay}일 남았습니다.`;
  //스타일시트 적용하기
  resultElement.style = "color:green; font-size:20px";
});

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  //input text xo 태그의 값 가져오기
  let title = document.getElementById("title").value;
  //날짜 값 가져오기
  let date = document.getElementById("date").value;
  //함수를 사용해서 날짜 차이값 변환
  let diffDay = getDiffDay(new Date(date));
  let ul = document.getElementById("ddayList");
  let li = document.createElement("li");
  li.innerHTML = `<span style = 'color:red'> ${title} </span> 까지 ${diffDay}일                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      남았습니다.`;
  ul.appendChild(li);
});
