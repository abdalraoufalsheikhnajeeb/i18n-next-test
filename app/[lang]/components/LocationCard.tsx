"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// Dynamic import for the Slider component
const Slider = dynamic(() => import("react-slick").then((mod) => mod.default), {
  ssr: false,
});

interface LocationCardProps {
  flagSrc: string;
  images: string[];
  googleMapsUrl: string;
  locationName: string;
  locationDetails: string;
  phoneNumber: string;
  addClass: string;
  whatsLink: string;
}

const SampleNextArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer  p-2 bg-accent rounded-full hover:scale-110 transition-all"
    onClick={onClick}
  >
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const SamplePrevArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer  p-2 bg-accent rounded-full hover:scale-110 transition-all"
    onClick={onClick}
  >
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const LocationCard: React.FC<LocationCardProps> = ({
  flagSrc,
  images,
  googleMapsUrl,
  locationName,
  locationDetails,
  phoneNumber,
  addClass,
  whatsLink,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",

    nextArrow: (
      <SampleNextArrow
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  };

  return (
    <div className={`w-screen ${addClass}`}>
      <div className="max-w-7xl mx-auto  rounded-lg overflow-hidden my-4">
        <div className="flex justify-center  items-center p-4">
          <img
            src={flagSrc}
            alt={`${locationName} flag`}
            className="w-20  mr-4"
          />
          <h2 className="text-5xl  font-bold">{locationName}</h2>
        </div>
        <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <div className="flex  items-center pt-12">
            <img
              src="/images/location.webp"
              alt={`${locationName} flag`}
              className="w-16  mr-4"
            />
            <p className="text-2xl text-gray-700 font-bold">
              {locationDetails}
            </p>
          </div>
        </Link>
        <Link href={whatsLink}>
          <div className="flex  items-center">
            <img
              src="/images/phone.webp"
              alt={`${locationName} flag`}
              className="w-16  mr-4"
            />
            <p className="text-2xl  text-gray-700 font-bold">{phoneNumber}</p>
          </div>
        </Link>

        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              {" "}
              <img
                src={image}
                alt={`Office ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="p-4">
          <Link
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center mt-4 bg-accent text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
          >
            FindUs on Google Maps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
