import { Metadata } from "next";
import { i18n, type Locale } from "../../i18n-config";
import './globals.css';
import { getDictionary } from "../../get-dictionary";
import Navbar from "./components/NavBar";
import { Footer } from "./components/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
	title: 'Alnujoom almasiya',
	description: '',
};
export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
  }) {
  
  const dic = await getDictionary(params.lang);
  return (
		<html lang={params.lang}>
			<body dir={params.lang === "ar" ? "rtl" : "ltr"} className={` bg-[#0b1b36] overflow-x-hidden `}> 
				<Navbar  dic={dic} />
				{children}
				<Footer params={params} />
			</body>
		</html>
  );
}

