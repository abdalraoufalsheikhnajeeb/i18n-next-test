import { Metadata } from "next";
import { i18n, type Locale } from "../../i18n-config";
import './globals.css';

import localFont from 'next/font/local';
import { getDictionary } from "../../get-dictionary";
import Navbar from "./components/NavBar";
import { Footer } from "./components/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

 
const cairo = localFont({
	src: [
		{
			path: '../../public/fonts/Cairo-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Cairo-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
});
export const metadata: Metadata = {
	title: 'i18n within app directory - Vercel Examples',
	description: 'How to do i18n in Next.js 13 within app directory',
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
			<body className={` bg-[#08052A] overflow-x-hidden ${cairo.className}`}>
				<Navbar  dic={dic} />
				{children}
				<Footer params={params} />
			</body>
		</html>
  );
}

