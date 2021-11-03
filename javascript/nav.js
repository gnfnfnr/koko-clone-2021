const navNotification =  document.querySelector('.nav__notification');

function notification(){
  const today = new Date();
  const hours =today.getHours();
  navNotification.innerText= `${hours}`;
}

notification();
setInterval(notification, 36000000);
