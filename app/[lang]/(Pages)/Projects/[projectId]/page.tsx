import Image from 'next/image';
import { projects } from '../../../data';
import { getDictionary } from '../../../../../get-dictionary';

export default async function Project({ params: { lang, projectId } }) {
	const project = projects.find((project) => {
		return project.Id === Number(projectId);
	});
	const dic = await getDictionary(lang);

	return (
		<div className=' min-h-screen  py-24'>
			<Image
				src='/images/bg-home.png'
				className='fixed w-full h-full object-cover top-0 left-0 -z-10'
				alt='bg'
				width={1920}
				height={1080}
			/>
			<div className='bg-white bg-opacity-30 border border-stone-300 p-6 rounded-[35px] mx-4 my-6 lg:mx-40 backdrop-blur-xl'>
				<div className='flex flex-col justify-center gap-8'>
					<div className='flex flex-col items-center gap-5 lg:flex-row'>
						<Image
							className='rounded-2xl w-[8.75rem] h-32'
							src={project?.icon}
							alt={project?.[`title-${lang}`]}
							width={86}
							height={86}
						/>
						<h2 className='text-xl font-bold'>{project?.[`title-${lang}`]}</h2>
					</div>
					<div className='flex flex-col items-center justify-center gap-6'>
						<p>{project?.[`desc-${lang}`]}</p>
						<video controls className='w-full h-auto rounded-xl'>
							<source src='/videos/sample.mp4' type='video/mp4' />
							{dic?.notSuported}
						</video>
						<p>{project?.[`desc2-${lang}`]}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
