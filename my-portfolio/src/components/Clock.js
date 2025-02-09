"use client";
import { useEffect, useState } from "react";


const Clock = () => {
  const [time, setTime] = useState("");

  const updateClock = () => {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    setTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    updateClock();

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
        {time}
    </div>
  )
}

export default Clock;