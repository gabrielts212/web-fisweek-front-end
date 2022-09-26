import "./Time.css";
import bg from "../../assets/images/time/bg.png";
export function Time() {
  return (
    <div className="Time" style={{ backgroundImage: `url(${bg})` }}>
      <div className="time2">
        <div className="time-day">
          <span id="Day">20</span>
          <span className="time2">Dias</span>
        </div>

        <div>
          <span id="hours">00</span>
          <span className="time2">Horas</span>
        </div>

        <div>
          <span id="minutes">00</span>
          <span className="time2">Minutos</span>
        </div>

        <div>
          <span id="seconds">00</span>
          <span className="time2">Segundos</span>
        </div>
      </div>
    </div>
  );
}

// const Days = document.getElementById('dias');
const Hours = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  // let d = date.getDay();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  // if  d = '0' + d;

  if (hr < 10) hr = "0" + hr;

  if (min < 10) min = "0" + min;

  if (s < 10) s = "0" + s;

  // if(--timer < 0) {
  //     timer = duration;
  // }

  // dias.textContent = d;
  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = s;
});

// function showTime() {

//     let date = new Date();

//     let h = date.getHours('horas');
//     let m = date.getMinutes('minutos');
//     let s = date.getSeconds('segundos');
//     let txt = d+":"+h+":"+m+":"+s;

//     document. querySelector('.Time').innerHTML = txt;

//   }

//    let timer = setInterval(showTime, 1000);
