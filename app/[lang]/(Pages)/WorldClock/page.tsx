"use client";

import { useState, useEffect } from "react";
import { Locale } from "../../../../i18n-config";
import { timeZones } from "../../data";
import AnTitle from "../../components/AnTitle";


interface Time {
  [key: string]: string;
}

const getTime = (tz: string) => {
  return new Date().toLocaleString("en-US", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24",
  });
};

const WorldClock = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const [times, setTimes] = useState<Time>({});
  useEffect(() => {
    const updateTime = () => {
      const newTimes: Time = {};
      timeZones.forEach(({ nameEN, tz }) => {
        newTimes[nameEN] = getTime(tz);
      });
      setTimes(newTimes);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-16 pt-28">
      <AnTitle title="World Clock"/>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {timeZones.map((zone) => (
          <div
            key={zone.nameEN}
            className="bg-white shadow rounded-lg p-3 text-center"
          >
            <h2 className="text-2xl  text-primary font-semibold mb-2">
              {lang === "en"
                ? zone.nameEN
                : lang === "ar"
                ? zone.nameAR
                : zone.nameRU}
            </h2>
            <p className="text-xl text-blue-600">{times[zone.nameEN]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;
