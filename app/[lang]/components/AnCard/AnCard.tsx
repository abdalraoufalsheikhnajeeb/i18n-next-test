"use client";
import Image from "next/image";
import React from "react";
import "./AnCard.css";
import Link from "next/link";
const AnCard = ({
  src,
  title,
  desc,
}: {
  src: string;
  title: string;
  desc: string;
}) => {
  return (
	<div className="max-w-sm bg-white border rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg">
	<Image
	  width={400}
	  height={200}
	  className="rounded-t-lg"
	  src={src}
	  alt=""
	/>
	<div className="p-5">
	  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	  </h5>
	  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
		{desc}
	  </p>
	</div>
  </div>
  
  );
};

export default AnCard;
