import React from 'react';

const LocationLink: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/place/alnujoom+almasiya+%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85+%D8%A7%D9%84%D9%85%D8%A7%D8%B3%D9%8A%D8%A9%E2%80%AD/@25.2541872,55.335827,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5d328fdaf569:0xb1ec00ad0b686aa8!8m2!3d25.2541872!4d55.335827!16s%2Fg%2F11w1cmy0t4?hl=en-GB&authuser=0&entry=ttu';

  return (
    <div className="flex justify-center items-center h-screen">
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
      >
        Find Us on Google Maps
      </a>
    </div>
  );
};

export default LocationLink;
