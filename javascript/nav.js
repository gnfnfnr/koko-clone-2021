const navNotification =  document.querySelectorAll('.badge');

function notification(){
  const today = new Date();
  const hours =today.getHours();
  navNotification.forEach((item) =>
    item.innerText= `${hours}`
  );
}

notification();
setInterval(notification, 36000000);
