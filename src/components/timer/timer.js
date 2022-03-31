import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
  }, 1000);
  return () => clearInterval(timer);
});

//stop timer after certain minutes

  return (
    <p >
      {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
    </p>
  );
}

export default Timer;
