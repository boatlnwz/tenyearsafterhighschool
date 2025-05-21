const start10y = new Date("2025-03-31T00:00:00");
const end10y = new Date("2035-03-31T12:00:00");
const span10y = end10y - start10y;
const secondsInDay = 86400;

function updateClock10y() {
  const now = new Date();
  const lived10y = now - start10y;
  const percent10y = lived10y / span10y;
  const secondsPassed10y = percent10y * secondsInDay;
  const ms10y = secondsPassed10y * 1000;

  const hours = Math.floor(ms10y / 3600000);
  const minutes = Math.floor((ms10y % 3600000) / 60000);
  const seconds = Math.floor((ms10y % 60000) / 1000);
  const milliseconds = Math.floor(ms10y % 1000);

  const hourDeg = ((hours % 12) + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;
  const subSecondDeg = (milliseconds / 1000) * 360;

  document.getElementById("hour10y").style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById("minute10y").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("second10y").style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById("subsecond10y").style.transform = `rotate(${subSecondDeg}deg)`;

  const pad = (n, d = 2) => n.toString().padStart(d, '0');
  document.getElementById("digital10y").textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
  document.getElementById("lifeBar10y").style.width = (percent10y * 100).toFixed(4) + "%";
  document.getElementById("percentText10y").textContent = `ผ่านไปแล้ว: ${(percent10y * 100).toFixed(6)}%`;
}

setInterval(updateClock10y, 20);
