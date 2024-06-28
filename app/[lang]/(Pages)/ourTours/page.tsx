import React from "react";
import Image from "next/image";
import AnTitle from "../../components/AnTitle";
import AnPagination from "../../components/AnPagination";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import AnCard from "../../components/AnCard/AnCard";

export default async function AboutUs({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);
  return (
    <div className=" gap-4 flex flex-col justify-center items-end">
      <header className="relative  flex flex-col gap-10 justify-end items-center  pb-28   bg-hero2 bg-center bg-cover bg-fixed h-screen bg-no-repeat   w-full">

<AnCard desc="" title="" key={"f"} src="/"/>
      </header>
     
    </div>
  );
}
