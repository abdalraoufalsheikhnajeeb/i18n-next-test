"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";
import Image from "next/image";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <ul className="flex gap-3">
        <Link href={redirectedPathName("en")}>
          <Image
            loading="lazy"
            quality={20}
            width={50}
            height={50}
            alt="flag"
            src={`/images/en.svg`}
          />
        </Link>
        <Link href={redirectedPathName("ar")}>
          <Image
            loading="lazy"
            quality={20}
            width={50}
            height={50}
            alt="flag"
            src={`/images/ar.webp`}
          />
        </Link>
        <Link href={redirectedPathName("ru")}>
          <Image
            loading="lazy"
            quality={20}
            width={50}
            height={50}
            alt="flag"
            src={`/images/ru.svg`}
          />
        </Link>
      </ul>
    </div>
  );
}
