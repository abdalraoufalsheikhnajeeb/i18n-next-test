import React from 'react';
import Image from 'next/image';
import AnTitle from '../../components/AnTitle';
import AnPagination from '../../components/AnPagination';
import { getDictionary } from '../../../../get-dictionary';

export default async function AboutUs({ params: { lang } }: { params: { lang: Locale } }) {
	const dic = await getDictionary(lang);
	return (
		<div className='    gap-4 flex flex-col justify-center items-end'>
			<header className='relative  min-h-[90vh] flex flex-col gap-10 justify-end items-center  pb-28  h-screen   w-full'>
				<Image src='/images/logo.png' alt='arrow' width={174} height={120} />
				<Image
					src='/images/bg2.webp'
					className='absolute w-full h-full object-cover top-0 left-0 -z-10'
					alt='bg'
					width={1920}
					height={1080}
				/>

				<h1 className='text-4xl font-bold'>{dic?.whoWeAre}</h1>
				<p className=' max-w-5xl w-[85vw] mx-auto text-center'>{dic?.AboutAyatAnimation}</p>
			</header>
			<section className='max-w-7xl w-[85vw] mx-auto  min-h-[90vh]  flex flex-col gap-20 items-center '>
				<AnTitle title={dic?.ourPortfolio} />
				<AnPagination dic={dic} />
			</section>
		</div>
	);
}
