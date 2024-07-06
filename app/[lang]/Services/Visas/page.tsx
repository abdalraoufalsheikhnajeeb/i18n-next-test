import Image from "next/image";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import AnTitle from "../../components/AnTitle";
import { visas } from "../../data";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <div className="flex flex-col container mx-auto  pt-28 px-4 lg:p-28">
      <AnTitle title={dic.viasa} />
      <div className="flex flex-col gap-8 ">
        {visas.map((visa, index) => {
          const {
            countryAR,
            countryEN,
            countryRU,
            durationAR,
            durationEN,
            durationRU,
            requirementsAR,
            requirementsEN,
            requirementsRU,
            descriptionAR,
            descriptionEN,
            descriptionRU,
            image,
          } = visa;

          const country =
            lang === "ar" ? countryAR : lang === "en" ? countryEN : countryRU;
          const duration =
            lang === "ar"
              ? durationAR
              : lang === "en"
              ? durationEN
              : durationRU;
          const requirements =
            lang === "ar"
              ? requirementsAR
              : lang === "en"
              ? requirementsEN
              : requirementsRU;
          const description =
            lang === "ar"
              ? descriptionAR
              : lang === "en"
              ? descriptionEN
              : descriptionRU;

          return (
            <div
              key={index}
              className=" flex justify-center items-center flex-col gap-14"
            >
              <hr />  
              <h2 className="text-5xl my-4 font-bold text-center ">
                {country}
              </h2>
              <div className="flex flex-col lg:flex-row-reverse justify-between">
                <Image
                  width={890}
                  height={512}
                  quality={20}
                  src={image}
                  alt={country}
                  className=" lg:h-72 object-cover"
                />
                <div className="p-4 flex flex-col gap-3">
                  {duration && (
                    <p className="text-primary text-3xl  font-bold">
                      - {duration}
                    </p>
                  )}
                  {requirements && (
                    <p className="text-primary mt-2 text-3xl font-bold">
                      {" "}
                      - {requirements}
                    </p>
                  )}
                  {description && (
                    <p className="text-primary mt-2 text-3xl  font-bold">
                      {" "}
                      - {description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
