const statusBarTime = document.querySelector(".status-bar > .time");
const percent = document.querySelector(".status-bar > .percent > span");
const chatTime = document.querySelector(".user-component .time");
const chattingTime = document.querySelectorAll(".message_time");
const todayDate = document.querySelector(".chat-timestamp span");

function setTime(){
  const today = new Date();
  let hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = String(today.getSeconds()).padStart(2, "0");
  let MODE = "AM";

 if (hours >= 12){
   if (hours >= 13) {
     hours = hours - 12;
   }
   MODE = "PM"
 }
 statusBarTime.innerText= `${MODE} ${hours}:${String(minutes).padStart(2, "0")}:${seconds}`
 percent.innerText = `${minutes}%`;
}

function current(){
  const today = new Date();
  const monthOptions = {month: 'long'};
  const month = new Intl.DateTimeFormat('en-US', monthOptions).format(today);
  const day = today.getDay();
  const year = today.getFullYear();
  const options = {weekday: 'long'};
  const date = new Intl.DateTimeFormat('en-US', options).format(today);
  if (todayDate) {
    todayDate.innerText = `${date}, ${month} ${day}, ${year}`;
  }
}

function staticTime() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = String(today.getMinutes()).padStart(2, "0");
  if (chatTime) {
    chatTime.innerText = `${hours}:${minutes}`;
  }
  if (chattingTime) {
    chattingTime.forEach((item) => {
      item.innerText = `${hours}:${minutes}`
    });
  }
}

staticTime();
current();
setTime();
setInterval(setTime, 1000);
