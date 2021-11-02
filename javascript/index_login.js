const time = document.querySelector(".status-bar > .time");
const percent = document.querySelector(".status-bar > .percent > span");

function setTime(){
  const today = new Date();
  let hours =today.getHours();
  const minutes = today.getMinutes();
  const seconds = String(today.getSeconds()).padStart(2, "0");
  let MODE = "AM";
 if (hours >= 12){
   if (hours >= 13) {
     hours = hours - 12;
   }
   MODE = "PM"
 }
 time.innerText = `${MODE} ${hours}:${String(minutes).padStart(2, "0")}:${seconds}`;
 percent.innerText = `${minutes}%`
}

setTime();
setInterval(setTime, 1000);
