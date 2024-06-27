import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";

import Image from "next/image";
import {
  Service,
  ApiResponse,
  ProjectsByYear,
  WorkShop,
  getServices,
  getWorkShop,
  getProjectsByDate,
} from "../../../../Services/api";
import OurServices from "../../components/ServicesComponents/OurServices";
import WorkShops from "../../components/workShopComponents/WorkShops";

type OurWorldProps = {
  dic: Awaited<ReturnType<typeof getDictionary>>;
  services: Service[];
  workshops: WorkShop[];
  oldProjects: ProjectsByYear;
  lang: Locale;
};

async function fetchData(lang: Locale) {
  const dic = await getDictionary(lang);
  const acceptedLanguage = lang === "ar" ? "1" : "2";

  let services: Service[] = [];
  let workshops: WorkShop[] = [];
  let oldProjects: ProjectsByYear = {};

  try {
    await getServices(
      acceptedLanguage,
      0,
      10,
      (response: ApiResponse<Service[]>) => {
        if (response?.Status) {
          services = response?.Data;
        }
      }
    );

    await getWorkShop(
      acceptedLanguage,
      0,
      10,
      (response: ApiResponse<WorkShop[]>) => {
        if (response?.Status && response?.Code === 200) {
          workshops = response?.Data;
        }
      }
    );
    await getProjectsByDate(
      acceptedLanguage,
      0,
      10,
      (response: ApiResponse<ProjectsByYear>) => {
        if (response?.Status) {
          oldProjects = response?.Data;
        }
      }
    );
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  return { dic, services, workshops, oldProjects, lang };
}

export default async function OurWorld({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { dic, services, workshops, oldProjects } = await fetchData(lang);

  return (
    <>
      <header className="relative min-h-[90vh] flex flex-col gap-10 justify-end items-center pb-28 h-screen w-full">
        <Image
          src="/images/logo.webp"
          className="w-40 md:w-40"
          alt="arrow"
          width={160}
          height={110}
        />
        <Image
          src="/images/bg2.webp"
          className="absolute w-full h-full object-cover top-0 left-0 -z-10"
          alt="bg"
          width={1920}
          height={1080}
        />
        <h2 className="text-center text-2xl font-bold leading-[32.8px] text-white ">
          {dic?.ourServices}
        </h2>
      </header>
      <div className="max-w-7xl w-[85vw] mx-auto gap-28 flex flex-col justify-center items-end">
        <OurServices dic={dic} services={services} lang={lang} />
        <WorkShops dic={dic} workshops={workshops} lang={lang} />
      </div>
    </>
  );
}
