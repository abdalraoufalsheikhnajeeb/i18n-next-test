import AnButton from '../../components/AnButton';
import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '../../../../get-dictionary';

export const CareerCard = async ({ lang, job }) => {
	const dic = await getDictionary(lang);
	return (
		<Link
			href={`/${lang}/Careers/${job.Id}`}
			className='bg-white bg-opacity-30 border border-stone-300 p-4 rounded-[35px] backdrop-blur-xl'>
			<div className='flex flex-col justify-center items-center gap-5 md:flex-row'>
				<Image
					className='rounded-2xl w-full md:w-52 md:h-52'
					src={job.icon}
					alt={job[`title-${lang}`]}
					width={200}
					height={200}
				/>
				<div className='flex flex-col items-start justify-center gap-2'>
					<h2 className='text-xl font-bold'>{job[`title-${lang}`]}</h2>
					<p className='mt-2 line-clamp-2 md:line-clamp-none'>{job[`description-${lang}`]}</p>
					<AnButton url={`/${lang}/Careers/${job.Id}`} className='hidden mt-4 md:flex'>
						{dic.learnMore}
					</AnButton>
				</div>
			</div>
		</Link>
	);
};
