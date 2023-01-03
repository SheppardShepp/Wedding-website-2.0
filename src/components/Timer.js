import React from "react";

const Timer1 = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "27 may 2023 16:30:00";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cadreTimer" role="timer">
      <div className="cadreTimer_box">
        <p id="day">{days < 10 ? "0" + days : days}</p>
        <span>Jours</span>
      </div>
      <div className="cadreTimer_box">
        <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        <span>Heures</span>
      </div>
      <div className="cadreTimer_box">
        <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        <span>Minutes</span>
      </div>
      <div className="cadreTimer_box">
        <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
        <span>Secondes</span>
      </div>
    </section>
  );
};

export default Timer1;
