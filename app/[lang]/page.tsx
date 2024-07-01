import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Image from "next/image";
import AnCard from "./components/AnCard/AnCard";
import Link from "next/link";
import { ourProjects } from "./data";
import AnTitle from "./components/AnTitle";
import Locations from "./components/Locations";
import Partners from "./components/Partners";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <>
      <div className="bg-hero bg-cover bg-no-repeat absolute -z-10  h-screen w-screen" />
      <div className=" bg-gradient absolute -z-[1]  h-screen w-screen" />
      <main className={" max-w-[90vw]  mx-auto flex items-center flex-col"}>
        <header className="h-screen gap-8 pb-8 flex flex-col items-center justify-end ">
          <Image
            quality={1}
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
                  quality={1}
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
                  quality={1}
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
                <Link href="" key={card.id}>
                  <AnCard desc={desc} title={title} src={card.src} />
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
        <section className="custombg2 gap-2 w-screen h-[70vh] lg:h-screen flex flex-col items-center justify-center lg:flex-row ">
          <Image
            quality={1}
            src="/images/logobig.webp"
            className="lg:w-[40vw] w-[70vw] "
            alt="arrow"
            width={600}
            height={600}
          />
        </section>
      </main>
      <footer
        className={`footer pt-10 flex pb-4 justify-center items-center flex-col gap-4 w-full`}
      >
        <span className="text-2xl text-gray-700 ">{dic?.followUs}</span>
        <div className="flex gap-4 p-4 items-center justify-center">
          <a
            title="whatsapp uea"
            target="_blank"
            href={
              "https://www.facebook.com/profile.php?id=61557919387064&mibextid=LQQJ4d"
            }
          >
            <Image
              quality={1}
              className="transform transition-transform duration-300 h-36 ease-in-out hover:scale-110"
              src={"/images/face.svg"}
              width={100}
              height={100}
              alt={"facebook icon"}
            />
          </a>
          <a
            title="instagram"
            target="_blank"
            href={
              "https://www.instagram.com/alnujoom_almasiya?igsh=Z3duaThqemhtZXpr&utm_source=qr"
            }
          >
            <Image
              quality={1}
              className="h-36 duration-300 transform  transition-transform ease-in-out hover:scale-110"
              src={"/images/insta.svg"}
              width={100}
              height={100}
              alt={"instagram link"}
            />
          </a>
          <a
            title="UAE location"
            target="_blank"
            href={"https://maps.app.goo.gl/7qC5aEFBgittwxY68"}
          >
            <Image
              quality={1}
              className="h-20 duration-300 transform  transition-transform ease-in-out hover:scale-110"
              src={"/images/map-uae.svg"}
              width={100}
              height={100}
              alt={"UAE location"}
            />
          </a>
          <a
            title="instagram"
            target="_blank"
            href={"https://maps.app.goo.gl/AURZZ5qdu8yfD9NH9"}
          >
            <Image
              quality={1}
              className="h-20 duration-300 transform  transition-transform ease-in-out hover:scale-110"
              src={"/images/map-sar.svg"}
              width={100}
              height={100}
              alt={"syria location"}
            />
          </a>
        </div>
      </footer>
    </>
  );
}
