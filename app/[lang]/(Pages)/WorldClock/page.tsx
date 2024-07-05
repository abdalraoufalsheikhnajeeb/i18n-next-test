"use client";

import { useState, useEffect } from "react";
import { Locale } from "../../../../i18n-config";
import { timeZones } from "../../data";
import AnTitle from "../../components/AnTitle";
import Image from "next/image";

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
    <div className="container mx-auto px-4 lg:px-16 pt-28 ">
      <AnTitle title="World Clock" />

      <div className="flex flex-wrap gap-4 items-center justify-center ">
        {timeZones.map((zone) => (
          <div
            key={zone.nameEN}
            className="bg-white shadow-lg rounded-lg p-3 text-center w-60 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center">
              <Image
                loading="lazy"
                quality={1}
                className="flex-shrink-0 h-10 me-4"
                width={50}
                height={50}
                src="/images/clock.svg"
                alt="clock"
              />
              <h2 className="text-2xl font-bold text-primary mb-2">
                {lang === "en"
                  ? zone.nameEN
                  : lang === "ar"
                  ? zone.nameAR
                  : zone.nameRU}
              </h2>
            </div>
            <p className="text-xl text-litePrimary">{times[zone.nameEN]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;
