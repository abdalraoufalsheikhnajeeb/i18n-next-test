import { useState, useEffect } from 'react';

const timeZones = [
  { name: 'New York', tz: 'America/New_York' },
  { name: 'London', tz: 'Europe/London' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' },
  { name: 'Sydney', tz: 'Australia/Sydney' },
  { name: 'Paris', tz: 'Europe/Paris' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles' },
  { name: 'Chicago', tz: 'America/Chicago' },
  { name: 'Toronto', tz: 'America/Toronto' },
  { name: 'Mexico City', tz: 'America/Mexico_City' },
  { name: 'São Paulo', tz: 'America/Sao_Paulo' },
  { name: 'Buenos Aires', tz: 'America/Argentina/Buenos_Aires' },
  { name: 'Cairo', tz: 'Africa/Cairo' },
  { name: 'Johannesburg', tz: 'Africa/Johannesburg' },
  { name: 'Moscow', tz: 'Europe/Moscow' },
  { name: 'Dubai', tz: 'Asia/Dubai' },
  { name: 'Mumbai', tz: 'Asia/Kolkata' },
  { name: 'Hong Kong', tz: 'Asia/Hong_Kong' },
  { name: 'Shanghai', tz: 'Asia/Shanghai' },
  { name: 'Singapore', tz: 'Asia/Singapore' },
  { name: 'Bangkok', tz: 'Asia/Bangkok' },
  { name: 'Jakarta', tz: 'Asia/Jakarta' },
  { name: 'Seoul', tz: 'Asia/Seoul' },
  { name: 'Istanbul', tz: 'Europe/Istanbul' },
  { name: 'Berlin', tz: 'Europe/Berlin' },
  { name: 'Madrid', tz: 'Europe/Madrid' },
  { name: 'Rome', tz: 'Europe/Rome' },
  { name: 'Athens', tz: 'Europe/Athens' },
  { name: 'Vienna', tz: 'Europe/Vienna' },
  { name: 'Amsterdam', tz: 'Europe/Amsterdam' },
  { name: 'Lisbon', tz: 'Europe/Lisbon' },
];

interface Time {
  [key: string]: string;
}

const WorldClock: React.FC = () => {
  const [times, setTimes] = useState<Time>({});

  useEffect(() => {
    const updateTime = () => {
      const newTimes: Time = {};
      timeZones.forEach(({ name, tz }) => {
        newTimes[name] = new Date().toLocaleString('en-US', { timeZone: tz, timeStyle: 'medium', hourCycle: 'h24' });
      });
      setTimes(newTimes);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">World Clock</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {timeZones.map(({ name }) => (
          <div key={name} className="bg-white shadow rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-xl">{times[name]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;
