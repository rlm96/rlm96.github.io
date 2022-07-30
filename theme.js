window.onload = renderTheme;

function renderTheme() {
  var currentHour = new Date().getHours();
  if (isDayTime(currentHour))
    setDayTheme();
  else
    setNightTheme();
}

function setDayTheme() {
  document.body.className = "background-daily";
  document.querySelector(".cursor").classList.add("code-daily");
}

function setNightTheme() {
  document.body.className = "background-nightly";
  document.querySelector(".cursor").classList.add("code-nightly");
}

function isDayTime(currentHour) {
  return 7 <= currentHour && currentHour < 20;
}
