"use client";

import { useState, useEffect } from "react";
import { Locale } from "../../../../i18n-config";

const timeZones = [
  { nameAR: "روما", nameEN: "Rome", nameRU: "Рим", tz: "Europe/Rome" },
  { nameAR: "دمشق", nameEN: "Damascus", nameRU: "Дамаск", tz: "Asia/Damascus" },
  { nameAR: "بيروت", nameEN: "Beirut", nameRU: "Бейрут", tz: "Asia/Beirut" },
  { nameAR: "عمان", nameEN: "Amman", nameRU: "Амман", tz: "Asia/Amman" },
  { nameAR: "الرياض", nameEN: "Riyadh", nameRU: "Эр-Рияд", tz: "Asia/Riyadh" },
  {
    nameAR: "نيويورك",
    nameEN: "New York",
    nameRU: "Нью-Йорк",
    tz: "America/New_York",
  },
  { nameAR: "لندن", nameEN: "London", nameRU: "Лондон", tz: "Europe/London" },
  { nameAR: "طوكيو", nameEN: "Tokyo", nameRU: "Токио", tz: "Asia/Tokyo" },
  { nameAR: "باريس", nameEN: "Paris", nameRU: "Париж", tz: "Europe/Paris" },
  {
    nameAR: "لوس أنجلوس",
    nameEN: "Los Angeles",
    nameRU: "Лос-Анджелес",
    tz: "America/Los_Angeles",
  },
  {
    nameAR: "مكسيكو سيتي",
    nameEN: "Mexico City",
    nameRU: "Мехико",
    tz: "America/Mexico_City",
  },
  {
    nameAR: "بوينس آيرس",
    nameEN: "Buenos Aires",
    nameRU: "Буэнос-Айрес",
    tz: "America/Argentina/Buenos_Aires",
  },
  { nameAR: "القاهرة", nameEN: "Cairo", nameRU: "Каир", tz: "Africa/Cairo" },
  { nameAR: "موسكو", nameEN: "Moscow", nameRU: "Москва", tz: "Europe/Moscow" },
  { nameAR: "دبي", nameEN: "Dubai", nameRU: "Дубай", tz: "Asia/Dubai" },
  {
    nameAR: "شنغهاي",
    nameEN: "Shanghai",
    nameRU: "Шанхай",
    tz: "Asia/Shanghai",
  },
  {
    nameAR: "سنغافورة",
    nameEN: "Singapore",
    nameRU: "Сингапур",
    tz: "Asia/Singapore",
  },
  {
    nameAR: "بانكوك",
    nameEN: "Bangkok",
    nameRU: "Бангкок",
    tz: "Asia/Bangkok",
  },
  {
    nameAR: "جاكرتا",
    nameEN: "Jakarta",
    nameRU: "Джакарта",
    tz: "Asia/Jakarta",
  },
  {
    nameAR: "إسطنبول",
    nameEN: "Istanbul",
    nameRU: "Стамбул",
    tz: "Europe/Istanbul",
  },
  { nameAR: "برلين", nameEN: "Berlin", nameRU: "Берлин", tz: "Europe/Berlin" },
  { nameAR: "مدريد", nameEN: "Madrid", nameRU: "Мадрид", tz: "Europe/Madrid" },
  {
    nameAR: "كوالالمبور",
    nameEN: "Kuala Lumpur",
    nameRU: "Куала-Лумпур",
    tz: "Asia/Kuala_Lumpur",
  },
];

interface Time {
  [key: string]: string;
}

const getTime = (tz: string) => {
  return new Date().toLocaleString("en-US", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
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
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4pt-28">
      <h1 className="text-4xl font-bold text-center mb-8">{}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {timeZones.map((zone) => (
          <div
            key={zone.nameEN}
            className="bg-white shadow rounded-lg p-6 text-center"
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
