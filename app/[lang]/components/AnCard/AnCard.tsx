import Image from "next/image";
import React from "react";
export default async function AnCard({
  src,
  title,
}: {
  src: string;
  title: string;

}) {
  return (
    <div className="max-w-sm bg-white border rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <Image
        loading="lazy"
        quality={20}
        width={400}
        height={200}
        className="rounded-t-lg aspect-video object-cover"
        src={src}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
          {title}
        </h5>
      
      </div>
    </div>
  );
}
