"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { type getDictionary } from "../../../get-dictionary";
import LocaleSwitcher from "./locale-switcher";

const Navbar = ({
  dic,
}: {
  dic: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const lang = dic?.currLang;
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  useEffect(() => {
    // Retrieve the selectedPageIndex from localStorage on component mount
    const storedPageIndex = localStorage.getItem("selectedPageIndex");
    if (storedPageIndex !== null) {
      setSelectedPageIndex(parseInt(storedPageIndex));
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        setIsBurgerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <nav
      className={`bg-gray-100 backdrop-brightness-125 h-20 w-full px-[5vw] py-2 flex items-center top-0 justify-between z-[100] fixed`}
    >
      <Image
        loading="lazy"
        quality={1}
        className="flex-shrink-0 h-full   "
        width={100}
        height={80}
        src="/images/logo.webp"
        alt="Logo"
      />

      <div className="hidden lg:flex ms-10  items-baseline space-x-4">
        <Link
          className={`text-primary text-xl z-20 relative hover:bg-primary-500/40  px-3 py-2 rounded-md  ${
            pathname === `/${lang}`
              ? "underline underline-offset-[12px] font-bold"
              : ""
          }`}
          href={`/${lang}`}
        >
          {dic?.Home}
        </Link>
        <Link
          className={`text-primary text-xl z-20 relative hover:bg-primary-500/40  px-3 py-2 rounded-md  ${
            pathname === `/${lang}/about-us`
              ? "underline underline-offset-8 font-bold"
              : ""
          }`}
          href={`/${lang}/about-us`}
        >
          {dic?.aboutUs}
        </Link>
        <Link
          className={`text-primary text-xl z-20 relative hover:bg-primary-500/40  px-3 py-2 rounded-md  ${
            pathname === `/${lang}/WorldClock`
              ? "underline underline-offset-8 font-bold"
              : ""
          }`}
          href={`/${lang}/WorldClock`}
        >
          <span>{dic.worldClock}</span>
        </Link>
      </div>
      <div className="flex items-center h-14 gap-4">
        <LocaleSwitcher />

        <Image
          loading="lazy"
          quality={1}
          className={`cursor-pointer h-10 shrink-0  z-10 -me-2 flex lg:hidden`}
          onClick={toggleBurger}
          src={isBurgerOpen ? "/images/Cart.svg" : "/images/burger_menu.svg"}
          width={50}
          height={50}
          alt="language"
        />
      </div>
      {isBurgerOpen && (
        <div className="flex bg-white w-screen h-screen flex-col fixed top-[60vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 justify-center items-center z-50">
          <Link
            className={`text-primary text-xl z-20 relative hover:bg-primary-500/40 hover:text-primary px-3 py-2 rounded-md  ${
              pathname === "/" ? "active" : ""
            }`}
            href={`/${lang}`}
            onClick={() => setIsBurgerOpen(false)}
          >
            {dic?.Home}
          </Link>
          <Link
            className={`text-primary text-xl z-20 relative hover:bg-primary-500/40 hover:text-primary px-3 py-2 rounded-md  ${
              pathname === "/about-us" ? "active" : ""
            }`}
            href={`/${lang}/about-us`}
            onClick={() => setIsBurgerOpen(false)}
          >
            {dic?.aboutUs}
          </Link>
          <Link
            className={`text-primary text-xl z-20 relative hover:bg-primary-500/40 hover:text-primary px-3 py-2 rounded-md  ${
              pathname === `/${lang}/WorldClock` ? "active" : ""
            }`}
            href={`/${lang}/WorldClock`}
          >
            <span>{dic.worldClock}</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
