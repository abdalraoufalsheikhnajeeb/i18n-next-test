// export default async function IndexPage({
//   params: { lang },
// }: {
//   params: { lang: Locale };
// }) {
//  const dic = await getDictionary(lang);

//   return (
//     <div>
//
//       <p>Current locale: {lang}</p>
//       <p>
//         This text is rendered on the server:{" "}
//         {{dic?.welcome}
//       </p>
//       <Counter dic={dic} />
//     </div>
//   );
// }

import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

import Image from "next/image";

import AnCard from "./components/AnCard/AnCard";
import Link from "next/link";
import { ourProjects } from "./data";
import AnTitle from "./components/AnTitle";
import Locations from "./components/Locations";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <>
      <div className="bg-hero bg-cover bg-no-repeat absolute -z-10  h-screen w-screen" />
      <main className={" max-w-[90vw]  mx-auto flex items-center flex-col"}>
        <header className="h-screen gap-8 pb-8 flex flex-col items-center justify-end">
          <h2 className="text-5xl md:text-5xl max-w-3xl font-bold  text-white  text-center">
            {dic?.homeText}
          </h2>
        </header>
        <section className="flex-col w-screen md:flex-row md:min-h-[50vh] flex bg-white px-28">
          <div className="flex w-full flex-col my-12 items-center gap-6 md:items-start overflow-visible text-black">
            <Image
              src="/images/logo.webp"
              className="w-40 md:w-60"
              alt="arrow"
              width={250}
              height={200}
            />
            <p>
              <span className="text-3xl font-bold">{dic?.ayatAnimation} </span>
              <span className="text-2xl ">{dic?.prev1}</span>
            </p>
          </div>
          <Image
            src="/images/farouk.webp"
            width={500}
            height={400}
            alt="founder image"
            className="object-cover object-center w-1/2 custom-clip"
          />
        </section>
        <section className="w-full md:min-h-[80vh] flex items-center gap-4 ">
          <div className="flex w-full flex-col justify-center items-center gap-16 ">
            <AnTitle title={dic?.some} />

            <div className="flex flex-wrap justify-center items-center gap-8">
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
                  <AnCard
                    key={card.id}
                    desc={desc}
                    title={title}
                    src={card.src}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <Locations
          params={{
            lang: lang,
          }}
        />
        <section className="custombg2 gap-2 w-screen h-[70vh] lg:h-screen flex flex-col items-center justify-center md:flex-row ">
         
            <Image
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
