const time = document.querySelector(".status-bar > .time");
const percent = document.querySelector(".status-bar > .percent > span");

function setTime(){
  const today = new Date();
  let hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  let MODE = "AM";
 if (hours > 13){
   hours = hours - 12;
   MODE = "PM"
 }
 time.innerText = `${MODE} ${hours}:${minutes}:${seconds}`;
 percent.innerText = `${minutes}%`
}

setTime();
setInterval(setTime, 1000);
