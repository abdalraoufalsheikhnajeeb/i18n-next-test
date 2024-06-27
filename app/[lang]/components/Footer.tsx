import Image from "next/image";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export const Footer = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const dic = await getDictionary(lang);

  return (
    <footer
      className={`footer pt-10 flex pb-4 justify-center items-center flex-col gap-10 w-full`}
    >
      <span className="text-xl">{dic?.followUs}</span>
      <div className="flex gap-4">
        <a
          title="whatsapp uea"
          target="_blank"
          href={""}
          className="bg-white border-4 border-accent relative flex justify-center items-center h-20 w-20 rounded-md"
        >
          <Image
            className="w-[70%] transform transition-transform duration-300 ease-in-out hover:scale-110"
            src={"/images/face.svg"}
            width={50}
            height={50}
            alt={"whatsapp icon"}
          />
        </a>
        <a
          title="instagram"
          target="_blank"
          href={""}
          className="bg-white border-4 border-accent relative flex justify-center items-center h-20 w-20 rounded-md"
        >
          <Image
            className="w-[70%] transform transition-transform duration-300 ease-in-out hover:scale-110"
            src={"/images/insta.svg"}
            width={50}
            height={50}
            alt={"social-icon"}
          />
        </a>
      </div>
    </footer>
  );
};
