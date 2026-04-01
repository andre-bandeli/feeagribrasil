import React, { useState, useEffect } from "react";

const StatsCounter = ({ finalNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = finalNumber / 100;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < finalNumber) {
          return Math.min(prevCount + increment, finalNumber);
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [finalNumber]);

  return <h3>{Math.floor(count)}</h3>;
};

export default StatsCounter;
