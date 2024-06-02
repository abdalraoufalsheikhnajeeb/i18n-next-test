import { ProjectsByYear, ApiResponse, ProjectByDate, getProjectsByDate } from '../../../../Services/api'; // Ensure these types are correctly imported
import OldProjectsCard from './OldProjectsCard';
import { getDictionary } from '../../../../get-dictionary';
import { Locale } from '../../../../i18n-config';
import Image from 'next/image';

type OldProjectsProps = {
	dic: Awaited<ReturnType<typeof getDictionary>>;
	oldProjects: ProjectsByYear;
	lang: Locale;
};

function OldProjects({ dic, oldProjects, lang }: OldProjectsProps) {
	return (
		<section className='our-characters min-h-[120vh] w-full flex flex-col gap-20 items-center'>
			<h1 className='text-5xl mb-10 font-bold text-primary-300'>{dic?.oldProjects}</h1>
			{Object.entries(oldProjects).map(([year, projects]) => (
				<div className='flex flex-col gap-4 xl:gap-0' key={year}>
					<h2 className='text-3xl font-bold text-primary-300 self-center'>{year}</h2>
					{(projects as ProjectByDate[]).map((project: ProjectByDate, index: number) => (
						<div
							key={project?.Id}
							className={`${
								index % 2 === 0 ? 'xl:ms-[14px]' : 'xl:self-end xl:me-2'
							} flex gap-16 w-full xl:w-[50%] items-center h-[29rem] xl:h-[13.7rem]`}>
							{index % 2 !== 0 && (
								<Image
									src='/images/lineD.png'
									className=' xl:object-cover xl:object-bottom xl:w-[3.5rem] xl:h-[100%]'
									alt='line'
									width={23}
									height={240}
								/>
							)}

							<div className='flex flex-col gap-8 xl:gap-12 xl:flex-row lg:w-[76rem]'>
								<OldProjectsCard lang={lang} src={project?.Images[0]} />

								<div className='flex flex-col gap-4 flex-grow '>
									<h2 className='font-bold text-lg'>{project.ProjectName?.Name}</h2>
									<p className=''>{project?.ProjectName?.Description}</p>
								</div>
							</div>

							{index % 2 === 0 && (
								<Image
									src='/images/lineD.png'
									className=' -order-1 xl:order-1 xl:object-cover xl:object-bottom xl:w-[3.5rem] xl:h-[100%]'
									alt='line'
									width={23}
									height={240}
								/>
							)}
						</div>
					))}
				</div>
			))}
		</section>
	);
}

export default OldProjects;
