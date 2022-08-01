window.onload = renderTheme;

function renderTheme() {
  isDayTimeAsync().then(isDayTimeResult => {
    if (isDayTimeResult)
      setDayTheme();
    else
      setNightTheme();
  });
}

function setDayTheme() {
  document.body.className = "background-daily";
  document.querySelector(".cursor").classList.add("code-daily");
}

function setNightTheme() {
  document.body.className = "background-nightly";
  document.querySelector(".cursor").classList.add("code-nightly");
}

async function isDayTimeAsync() {
  var currentDate = new Date();
  try {
    const position = await getPosition();
    var times = SunCalc.getTimes(currentDate, position.coords.latitude, position.coords.longitude);
    return currentDate > times.sunrise && currentDate < times.sunset;
  } catch {
    return 7 <= currentDate.getHours() && currentDate.getHours() < 20;
  }
}

function getPosition() {
  return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
  });
}