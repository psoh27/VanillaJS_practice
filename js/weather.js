const API_Key = "87e31e4b459d0fb80f0f98dcaf80ea46";

function onSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span");
      weather.innerText = `
      ${data.weather[0].main}
      ${Math.round(data.main.temp)}℃`;
    });
}
function onError() {
  alert("⚠️현재 위치를 불러올 수 없어요!⚠️");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
