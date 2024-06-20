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
// import Counter from './components/counter';
// import LocaleSwitcher from './components/locale-switcher';

import Image from "next/image";
import AnButton from "./components/AnButton";
import AnCard from "./components/AnCard/AnCard";
import AnImageSwiper from "./components/AnImageSwiper/AnImageSwiper";
import Link from "next/link";
import { ourProjects } from "./data";
import AnTitle from "./components/AnTitle";
import History from "./components/History/History";
import LocationLink from "./components/LocationLink";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <>
      <div className="bg-hero bg-cover bg-no-repeat absolute -z-10  h-screen w-screen" />
      <main
        className={
          " max-w-[90vw]  mx-auto flex items-center flex-col"
        }
      >
        <header className="h-screen gap-8 pb-8 flex flex-col items-center justify-end">
          <h2 className="text-5xl md:text-5xl max-w-3xl font-bold  text-white  text-center">
            {dic?.homeText}
          </h2>

          <AnButton url={"/"} className="">
            <Image
              src="/images/reel.png"
              className="h-6"
              alt="arrow"
              width={30}
              height={30}
            />
            {dic?.showReel}
          </AnButton>
        </header>

        <section className="flex-col w-screen md:flex-row md:min-h-[50vh] flex bg-white px-28">
          <div className="flex w-full flex-col my-12 items-center gap-6 md:items-start overflow-visible text-black">
            <Image
              src="/images/logo.png"
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

			<AnTitle title={dic?.some}/>
 
            <div className="flex flex-wrap justify-center items-center gap-8">
              {ourProjects.slice(0, 4).map((card) => (
                <Link href={`/${lang}/Services/${card.title}/${card.id}`} key={card.id}>
                  <AnCard desc={card.desc} title={card.title} src={card.src} />
                </Link>
              ))}
            </div>
            {ourProjects.length > 4 && (
              <AnButton
                url={`/${lang}/AboutUs`}
                className=" justify-self-center self-center md:me-32"
              >
                <span>{dic?.moreProjects}</span>
                <Image
                  src="/images/moreArrow.png"
                  className={` ${lang == "ar" && "rotate-180"} `}
                  alt="arrow"
                  width={20}
                  height={30}
                />
              </AnButton>
            )}
          </div>
          
        </section>
        <section className="gap-2 w-full md:min-h-[80vh] flex flex-col justify-center items-center md:flex-row ">
          

          <div className="flex justify-center flex-col gap-16 items-center h-full relative w-full ">
            <h2 className="text-5xl font-bold ">{dic?.latestWorkshops}</h2>
            <AnImageSwiper imageSize={400} />
          </div>
        </section>


        <History/>

        <LocationLink/>
        <LocationLink/>
        <section className=" gap-2 w-full md:min-h-[80vh] flex flex-col items-center md:flex-row ">
          
          <div className="flex justify-center items-center flex-col md:flex-row h-full relative w-full">
            <Image
              src="/images/logo.png"
              className="md:w-[30rem] w-48"
              alt="arrow"
              width={450}
              height={300}
            />
          </div>
        </section>
      </main>
    </>
  );
}
