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
        quality={10}
        width={400}
        height={200}
        className="rounded-t-lg aspect-video object-cover"
        src={src}
        alt=""
      />
      <div className="p-4 flex-grow flex flex-col justify-between h-28">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary text-center">
          {title}
        </h5>
      </div>
    </div>
  );
}
