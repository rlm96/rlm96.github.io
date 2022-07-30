var cursor = true;
var speed = 420;

setInterval(() => {
  if(cursor) {
    document.getElementById('cursor').style.opacity = 0;
    cursor = !cursor;
  } else {
    document.getElementById('cursor').style.opacity = 1;
    cursor = !cursor;
  }
}, speed);

window.onload = function() {
  var currentHour = new Date().getHours();
  if (document.body) {
    if (isDayTime(currentHour))
      setDayTheme();
    else
      setNightTheme();
  }
};

function setDayTheme() {
  document.body.className = "daily";
  document.getElementById('cursor').style.color = "black";
}

function setNightTheme() {
  document.body.className = "nightly";
  document.getElementById('cursor').style.color = "white";
}

function isDayTime(currentHour) {
  return 7 <= currentHour && currentHour < 20;
}
