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
        { i18n.locales.map((locale) => {
          return (
            <li  key={locale}>
              <Link href={redirectedPathName(locale)}>
              <Image
              width={50}
              height={50}
              alt="flag"
              src={`/images/${locale}.svg`}
              />
              </Link>
             
            </li>
          );
        })}
      </ul>
    </div>
  );
}
