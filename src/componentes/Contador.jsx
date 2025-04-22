import React, { useState, useEffect } from "react";
import "../styles/Contador.scss";
import "../styles/Events.scss";

const Contador = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("2025-10-27T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="contador">
      {timeLeft ? (
        <div className="time-wrapper">
          <div className="time-box">
            <h2>{timeLeft.days}</h2>
            <span>Dias</span>
          </div>
          <div className="time-box">
            <h2>{timeLeft.hours}</h2>
            <span>Horas</span>
          </div>
          <div className="time-box">
            <h2>{timeLeft.minutes}</h2>
            <span>Minutos</span>
          </div>
          <div className="time-box">
            <h2>{timeLeft.seconds}</h2>
            <span>Segundos</span>
          </div>
        </div>
      ) : (
        <h2>Contador completo!</h2>
      )}
    </div>
  );
};

export default Contador;
