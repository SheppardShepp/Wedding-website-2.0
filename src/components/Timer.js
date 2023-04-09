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
    <section
      className="cadre"
      role="timer">
      <div className="cadre_day">
        <p
          id="day"
          className="cadre_day_Number">
          {days < 10 ? "0" + days : days}
        </p>
        <p className="cadre_day_Text">{days < 2 ? "jour restant" : "jours restants"}</p>
      </div>
      <div className="cadre_timer">
        <div className="cadre_timer_box">
          <p
            id="hour"
            className="cadre_timer_box_number">
            {hours < 10 ? "0" + hours : hours}
          </p>
        </div>
        <p className="cadre_timer_point">:</p>
        <div className="cadre_timer_box">
          <p
            id="minute"
            className="cadre_timer_box_number">
            {minutes < 10 ? "0" + minutes : minutes}
          </p>
        </div>
        <p className="cadre_timer_point">:</p>
        <div className="cadre_timer_box">
          <p
            id="second"
            className="cadre_timer_box_number">
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
        </div>
      </div>
      <div className="cadre_timer">
        <div className="cadre_timer_box">
          <p className="cadre_timer_box_text">Heures</p>
        </div>
        <div className="cadre_timer_box"></div>
        <div className="cadre_timer_box">
          <p className="cadre_timer_box_text">Minutes</p>
        </div>
        <div className="cadre_timer_box"></div>
        <div className="cadre_timer_box">
          <p className="cadre_timer_box_text">Secondes</p>
        </div>
      </div>
    </section>
  );
};

export default Timer1;
