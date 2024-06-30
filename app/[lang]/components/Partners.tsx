"use client";
import React from "react";
import AnTitle from "./AnTitle.tsx";
import { partners } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { type getDictionary } from "../../../get-dictionary";
import Image from "next/image";
import "./Partners.css"
const Partners = ({
  dic,
}: {
  dic: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="our-partners-section px-8 py-8">
      <AnTitle title={dic.OurPartners} />
      <Slider {...settings}>
        {partners.map((card, index) => {
          let desc;
          let title;

          if (dic.currLang === "ar") {
            desc = card.descar;
            title = card.titlear;
          } else if (dic.currLang === "ru") {
            desc = card.descru;
            title = card.titleru;
          } else {
            desc = card.descen;
            title = card.titleen;
          }

          return (
            <div
              key={index}
              className="max-w-sm o h-96 mx-4  bg-white bg-gray-100 border rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full"
            >
              <Image
                width={400}
                height={200}
                className="rounded-t-lg aspect-video object-cover"
                src={card.src}
                alt={title}
              />
              <div className="p-5 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Partners;
