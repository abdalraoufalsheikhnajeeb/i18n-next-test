import AnApplyForm from '@/app/[lang]/components/AnApplyForm';
import { jobs } from '../../../../data.ts';
import Image from 'next/image';
import { getDictionary } from '../../../../../../get-dictionary';

export default async function Apply({ params: { lang, Id } }) {
	const job = jobs.find((job) => {
		return job.Id === Number(Id);
	});
	const dic = await getDictionary(lang);

	return (
		<div className='min-h-screen bg-center pt-24'>
			<Image
				src='/images/bg-home.png'
				className='fixed w-full h-full object-cover top-0 left-0 -z-10'
				alt='bg'
				width={1920}
				height={1080}
			/>
			<div className='bg-white bg-opacity-30 border border-stone-300 p-6 rounded-[35px] mx-4 my-6 md:mx-16 lg:mx-40 xl:mx-52 2xl:mx-96 backdrop-blur-xl'>
				<div className='flex flex-col justify-center items-center gap-8'>
					<h2 className='text-xl font-bold'>{job[`title-${lang}`]}</h2>
					<p className='mt-2'>{dic?.applyDesc}</p>
					<AnApplyForm lang={lang} />
				</div>
			</div>
		</div>
	);
}
