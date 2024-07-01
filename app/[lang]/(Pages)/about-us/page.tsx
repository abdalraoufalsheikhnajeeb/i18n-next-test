import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "../../../../get-dictionary";

export default async function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <section className="flex-col w-screen lg:flex-row lg:min-h-[50vh] flex bg-white px-8 lg:px-28">
      <div className="flex w-full flex-col my-12 items-center gap-6 lg:items-start overflow-visible text-black">
        <Image
          quality={1}
          src="/images/logo.webp"
          className="w-40 lg:w-60"
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
        quality={1}
        src="/images/farouk.webp"
        width={500}
        height={400}
        alt="founder image"
        className="object-cover object-center lg:w-1/2 w-screen lg:custom-clip"
      />
    </section>
  );
}
