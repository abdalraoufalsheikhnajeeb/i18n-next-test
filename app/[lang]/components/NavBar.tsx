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

  return (
    <nav
      className={`
				
			 backdrop-blur-md backdrop-brightness-75 h-20 w-full px-[5vw] py-2 flex items-center top-0 justify-between z-[100] fixed`}
    >
      <Image
        loading="lazy"
        quality={20}
        className="flex-shrink-0 h-full   "
        width={100}
        height={80}
        src="/images/logo.webp"
        alt="Logo"
      />

      <div className="hidden lg:flex ms-10  items-baseline space-x-4">
        <Link
          className={`text-white text-xl z-20 relative hover:bg-primary-500/40 hover:text-white px-3 py-2 rounded-md  ${
            pathname === "/" ? "active" : ""
          }`}
          href={`/${lang}`}
        >
          {dic?.Home}
        </Link>
        {/* <Link
          className={`text-white text-xl z-20 relative hover:bg-primary-500/40 hover:text-white px-3 py-2 rounded-md  ${
            pathname === "/about" ? "active" : ""
          }`}
          href={`/${lang}/ourTours`}
        >
          {dic?.ourTours}
        </Link> */}
        <Link
          className={`text-white text-xl z-20 relative hover:bg-primary-500/40 hover:text-white px-3 py-2 rounded-md  ${
            pathname === "/about" ? "active" : ""
          }`}
          href={`/${lang}/about-us`}
        >
          {dic?.aboutUs}
        </Link>
      </div>
      <div className="flex items-center h-14 gap-4">
        <Link href={`/${lang}/worldClock`}>
        {dic.worldClock}
        </Link>
        <LocaleSwitcher />

        <Image
          loading="lazy"
          quality={20}
          className={`cursor-pointer ${
            isBurgerOpen && "h-16 w-16"
          } shrink-0  z-10 -me-2 flex lg:hidden`}
          onClick={toggleBurger}
          src={isBurgerOpen ? "/images/Cart.svg" : "/images/burger_menu.svg"}
          width={50}
          height={50}
          alt="language"
        />
      </div>
      {isBurgerOpen && (
        <>
          <div className="nav-items-container">
            <Link
              className={`text-white text-xl z-20 relative hover:bg-primary-500/40 hover:text-white px-3 py-2 rounded-md  ${
                pathname === "/" ? "active" : ""
              }`}
              href={`/${lang}`}
            >
              {dic?.Home}
            </Link>
            {/* <Link
              className={`text-white text-xl z-20 relative hover:bg-primary-500/40 hover:text-white px-3 py-2 rounded-md  ${
                pathname === "/about" ? "active" : ""
              }`}
              href={`/${lang}/ourTours`}
            >
              {dic?.ourTours}
            </Link> */}
          </div>
          <Image
            loading="lazy"
            quality={20}
            src={`/images/hero2M.webp`}
            className="blurred-background"
            width={10}
            height={10}
            alt="language"
          />
        </>
      )}
    </nav>
  );
};

export default Navbar;
