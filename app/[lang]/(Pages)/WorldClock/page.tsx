'use server';

import { FC } from 'react';
import { Locale } from '../../../../i18n-config';

const timeZones = [
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
  { nameAR: "مومباي", nameEN: "Mumbai", nameRU: "Мумбаи", tz: "Asia/Kolkata" },
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
  { nameAR: "روما", nameEN: "Rome", nameRU: "Рим", tz: "Europe/Rome" },
];

interface Time {
  [key: string]: string;
}

const getTime = async (tz: string) => {
  return new Date().toLocaleString('en-US', {
    timeZone: tz,
    timeStyle: 'medium',
    hourCycle: 'h24',
  });
};

const WorldClock: FC<{ params: { lang: Locale } }> = async ({
  params: { lang },
}) => {
  const times: Time = {};
  const timePromises = timeZones.map(async ({ nameEN, tz }) => {
    const time = await getTime(tz);
    times[nameEN] = time;
  });

  await Promise.all(timePromises);

  return (
    <div className="container mx-auto p-4 bg3 pt-28">
      <h1 className="text-4xl font-bold text-center mb-8">World Clock</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {timeZones.map((zone) => (
          <div
            key={zone.nameEN}
            className="bg-white shadow rounded-lg p-6 text-center"
          >
            <h2 className="text-2xl text-primary font-semibold mb-2">
              {lang === 'en' ? zone.nameEN : lang === 'ar' ? zone.nameAR : zone.nameRU}
            </h2>
            <p className="text-xl text-blue-600">{times[zone.nameEN]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;
