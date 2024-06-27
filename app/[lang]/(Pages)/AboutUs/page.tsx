import React from "react";
import Image from "next/image";
import AnTitle from "../../components/AnTitle";
import AnPagination from "../../components/AnPagination";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";

export default async function AboutUs({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);
  return (
    <div className=" gap-4 flex flex-col justify-center items-end">
      <header className="relative  h-screen flex flex-col gap-10 justify-end items-center  pb-28   bg-hero2 bg-center bg-cover h-screen bg-no-repeat   w-full">
        <Image src="/images/logo.webp" alt="arrow" width={174} height={120} />

        <h1 className="text-4xl font-bold">{dic?.whoWeAre}</h1>
        <p className=" max-w-5xl w-[85vw] mx-auto text-center">
          {dic?.AboutAyatAnimation}
        </p>
      </header>
      <section className="max-w-7xl w-[85vw] mx-auto  min-h-[90vh]  flex flex-col gap-20 items-center ">
        <AnTitle title={dic?.ourPortfolio} />
        <AnPagination dic={dic} />
      </section>
    </div>
  );
}
