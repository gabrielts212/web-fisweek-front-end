import "./Timer.css";
import bg from "../../assets/images/timer/bg.png";
export function Timer() {
  return (
    <div
      className="countdownContainer"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="countdownEl days-c">
        <p className="textTimer" id="days"></p>
        <span className="stopwatchDate">Days</span>
      </div>

      <span className="separation">:</span>

      <div className="countdownEl hours-c">
        <p className="textTimer" id="hours"></p>
        <span className="stopwatchDate">hours</span>
      </div>

      <span className="separation">:</span>

      <div className="countdownEl minutes-c">
        <p className="textTimer" id="minutes"></p>
        <span className="stopwatchDate">minutes</span>
      </div>

      <span className="separation">:</span>

      <div className="countdownEl seconds-c">
        <p className="textTimer" id="seconds"></p>
        <span className="stopwatchDate">seconds</span>
      </div>
    </div>
  );
}

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date("01/01/2024 00:00:00").getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById("days").innerText = Math.floor(diff / day);
  document.getElementById("hours").innerText = Math.floor((diff % day) / hour);
  document.getElementById("minutes").innerText = Math.floor(
    (diff % hour) / minute
  );
  document.getElementById("seconds").innerText = Math.floor(
    (diff % minute) / second
  );

  if (seconds.innerText < 10) {
    seconds.innerText = `0${seconds.innerText}`;
  }
  if (hours.innerText < 10) {
    hours.innerText = `0${hours.innerText}`;
  }
  if (minutes.innerText < 10) {
    minutes.innerText = `0${minutes.innerText}`;
  }
}
function resetCountdown() {
  clearInterval(x);
  let date_end = document.form_main.date_end.value;
  count_down = new Date(`${date_end} 00:00:00`).getTime();
  x = setInterval(() => countDown(), second);
}
