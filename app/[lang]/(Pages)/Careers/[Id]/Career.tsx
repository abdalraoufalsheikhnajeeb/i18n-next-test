import Image from 'next/image';
import AnButton from '../../../components/AnButton';
import { jobs, Job } from '../../../data';
import { getDictionary } from '../../../../../get-dictionary';
import { Locale } from '../../../../../i18n-config.ts';
interface CareerProps {
	params: {
		lang: Locale;
		Id: string;
	};
}

export default async function Career({ params: { lang, Id } }: CareerProps) {
	const job: Job | undefined = jobs.find((job) => job.Id === Number(Id));
	if (!job) {
		return <div>Job not found</div>; // Handle job not found
	}

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

			<div className='bg-white bg-opacity-30 border border-stone-300 p-6 rounded-[35px] mx-4 my-6 lg:mx-40 backdrop-blur-xl'>
				<div className='flex flex-col justify-center gap-8'>
					<div className='flex items-center gap-5'>
						<Image
							className='rounded-2xl w-20 h-20'
							src={job.icon}
							alt={job[`title-${lang}`]}
							width={86}
							height={86}
						/>
						<h2 className='text-xl font-bold'>{job[`title-${lang}`]}</h2>
					</div>
					<div className='flex flex-col items-start justify-center gap-2 cursor-pointer lg:cursor-default'>
						<p>{job[`description-${lang}`]}</p>

						<AnButton
							url={`/${lang}/Careers/${Id}/Apply`}
							className='my-4 w-full px-16 rounded-full lg:w-auto'>
							{dic.apply}
						</AnButton>
						<h2 className='text-xl font-bold my-4'>{dic.mission}</h2>
						<p>{job[`mission-${lang}`]}</p>
						<h2 className='text-xl font-bold my-4'>{dic.qualifications}</h2>
						<p>{job[`qualification-${lang}`]}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
