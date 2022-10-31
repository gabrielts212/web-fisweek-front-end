import "./Timer.css";
import bg from "../../assets/images/timer/bg.png";

import { useTranslation } from 'react-i18next';

export function Timer() {
  const { t } = useTranslation();

  return (
    <div
      className="countdownContainer"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="countdownEl days-c">
        <p className="textTimer" id="days"></p>
        <span className="stopwatchDate">{t("timer.days")}</span>
      </div>

      <span className="separation">:</span>

      <div className="countdownEl hours-c">
        <p className="textTimer" id="hours"></p>
        <span className="stopwatchDate">{t("timer.hours")}</span>
      </div>

      <span className="separation">:</span>

      <div className="countdownEl minutes-c">
        <p className="textTimer" id="minutes"></p>
        <span className="stopwatchDate">{t("timer.minutes")}</span>
      </div>

      <span className="separation">:</span>

      <div className="countdownEl seconds-c">
        <p className="textTimer" id="seconds"></p>
        <span className="stopwatchDate">{t("timer.seconds")}</span>
      </div>
    </div>
  );
}

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

let timer;

let count_down = new Date("11/07/2022 09:00:00").getTime();
let x = setInterval(() => countDown(), second);

function padLeadingZeros(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  if(diff > 0){    
    let diffDays = Math.floor(diff / day);    
    let elDays = document.getElementById("days");
    elDays.innerText = padLeadingZeros(diffDays, 2);

    let elHours = document.getElementById("hours");
    let diffHours = Math.floor((diff % day) / hour);
    elHours.innerText = padLeadingZeros(diffHours, 2);

    let elMinutes = document.getElementById("minutes");
    elMinutes.innerText = padLeadingZeros(Math.floor((diff % hour) / minute), 2);
    
    let elSeconds = document.getElementById("seconds");
    elSeconds.innerText = padLeadingZeros(Math.floor((diff % minute) / second), 2);
       
    if ( hour == 0 && minute == 0 && second == 0 && day  == 0) {
      timer = timer  + 2;
    }
  }        
}
