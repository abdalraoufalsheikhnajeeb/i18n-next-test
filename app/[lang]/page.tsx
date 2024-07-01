import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Image from "next/image";
import AnCard from "./components/AnCard/AnCard";
import Link from "next/link";
import { ourProjects } from "./data";
import AnTitle from "./components/AnTitle";
import Locations from "./components/Locations";
import WorldClock from "./(Pages)/WorldClock/page";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <>
      <Image
        loading="lazy"
        quality={10}
        src="/images/hero.webp"
        className="bg-gradient absolute -z-10 object-cover  h-[100dvh] w-screen"
        alt="arrow"
        width={1280}
        height={720}
      />
      <div className=" bg-gradient absolute -z-[1]  h-[100dvh] w-screen" />
      <main className={" max-w-[90vw]  mx-auto flex items-center flex-col"}>
        <header className="h-[100dvh] gap-8 pb-8 flex flex-col items-center justify-end ">
          <Image
            loading="lazy"
            quality={20}
            src="/images/logo.webp"
            className="w-40 lg:w-60"
            alt="arrow"
            width={250}
            height={200}
          />
          <h2 className="text-5xl lg:text-5xl max-w-3xl font-bold  text-[#11407c]  text-center">
            {dic?.homeText}
          </h2>

          <button className="text-2xl lg:text-3xl max-w-3xl font-bold text-[#11407c]  text-center">
            {dic.contactUsTitle}
          </button>
          <div className="flex gap-4">
            <div className="flex bg-white hover:bg-gray-100 text-[#11407c] font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-200 ">
              <Link href="https://wa.me/971545866066">
                <Image
                  loading="lazy"
                  quality={20}
                  src="/images/whats-uae.svg"
                  className="w-20 lg:w-24"
                  alt="arrow"
                  width={250}
                  height={200}
                />
              </Link>
            </div>
            <div className="flex bg-white hover:bg-gray-100 text-[#11407c] font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-200 ">
              <Link href="https://wa.me/963950026610">
                <Image
                  loading="lazy"
                  quality={20}
                  src="/images/whats-sar.svg"
                  className="w-20 lg:w-24"
                  alt="arrow"
                  width={250}
                  height={200}
                />
              </Link>
            </div>
          </div>
        </header>
        <section className="w-screen flex flex-col items-center gap-4 custombg">
          <AnTitle title={dic?.someProjects} />

          <div className="flex flex-wrap justify-center items-center gap-8 p-12">
            {ourProjects.map((card) => {
              let title;

              if (dic.currLang === "ar") {
                title = card.titlear;
              } else if (dic.currLang === "ru") {
                title = card.titleru;
              } else {
                title = card.titleen;
              }

              return (
                <Link href={`/${lang}/Services/${card.rout}`} key={card.id}>
                  <AnCard title={title} src={card.src} />
                </Link>
              );
            })}
          </div>
        </section>

        <Locations
          params={{
            lang: lang,
          }}
        />
        <section className="custombg2 gap-2 w-screen h-[70vh] lg:h-[100dvh] flex flex-col items-center justify-center lg:flex-row ">
          <Image
            loading="lazy"
            quality={20}
            src="/images/logobig.webp"
            className="lg:w-[40vw] w-[70vw] "
            alt="arrow"
            width={600}
            height={600}
          />
        </section>
      </main>
    </>
  );
}
