import { Metadata } from "next";
import { i18n, type Locale } from "../../i18n-config";
import Head from "next/head";
import "./globals.css";
import { getDictionary } from "../../get-dictionary";
import Navbar from "./components/NavBar"; 
import { Tajawal } from "next/font/google";
import Footer from "./components/Footer";

// Importing Tajawal for Arabic with weights 400 and 700
const tajawal = Tajawal({ subsets: ["latin", "arabic"], weight: ["400", "700", "900"] });



export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title:
    "Alnujoom Almasiya for travel and tourism | النجوم الماسية للسياحة والسفر",
  description: "cham wings authorized agent | وكيل معتمد لأجنحة الشام",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dic = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body
        dir={params.lang === "ar" ? "rtl" : "ltr"}
        className={`overflow-x-hidden text-primary bg3 ${tajawal.className}`}
      >
        <Navbar dic={dic} />
        {children}
        <Footer
          params={{
            lang: params.lang,
          }}
        />
      </body>
    </html>
  );
}
