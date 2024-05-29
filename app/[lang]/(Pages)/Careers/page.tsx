import React from 'react';
import Image from 'next/image';
import { CareerCard } from './CareerCard';
import { jobs } from '../../data';
import { getDictionary } from '../../../../get-dictionary';

export default async function Careers({
  params: { lang },
}: {
  params: { lang: Locale };
  } ) {
		const dic = await getDictionary(lang);


	return (
		<>
			<div className=' min-h-screen  flex flex-col pb-28 justify-end items-center gap-10'>
				<Image
					src='/images/bg2.webp'
					className='absolute w-full h-full object-cover top-0 left-0 -z-10'
					alt='bg'
					width={1920}
					height={1080}
				/>

				<Image width={174} height={120} src='/images/logo.png' alt='Logo' />
				<h1 className='text-4xl font-bold'>{dic.careersTitle}</h1>
				<p className='max-w-4xl text-center px-4'>{dic.careersDesc}</p>
			</div>
			<div className=' my-12 flex flex-col items-center gap-8 max-w-sm md:max-w-[95rem] px-8 mx-auto'>
				{jobs.map((job) => (
					<CareerCard key={job[`title-${lang}`] + job.Id} lang={lang} job={job} />
				))}
			</div>
		</>
	);
}