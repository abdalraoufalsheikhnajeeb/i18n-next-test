import Image from 'next/image';
import AnTitle from '../../components/AnTitle';
import AnCard from '../../components/AnCard/AnCard';
import AnImageFlipper from '../../components/AnImageFlipper/AnImageFlipper';
import { oldProjects, ourCharacters, projectsImages3d, serviscesImages } from '../../data.';
import { getDictionary } from '../../../../get-dictionary';

export default async function OurWorld({
  params: { lang },
}: {
  params: { lang: Locale };
  } ) {
	
	const dic = await getDictionary(lang);

	return (
		<>
			<header className='relative w-full h-screen xl:h-[50vw] pb-16 flex flex-col gap-10 justify-end items-center'>
				<Image src='/images/logo.png' className='w-40 md:w-40' alt='arrow' width={160} height={110} />
				<Image src='/images/bg2.webp' className='absolute w-full h-full object-cover top-0 left-0 -z-10' alt='bg' width={1920} height={1080} />
				<h2 className='text-center text-2xl  font-bold leading-[32.8px] text-white '>
					{dic.ourServices}
				</h2>
			</header>
			<div className=' max-w-7xl w-[85vw] mx-auto  gap-28 flex flex-col justify-center items-end'>
				<section className='min-h-[90vh] w-full flex flex-col gap-20 items-center '>
					<h2>{dic.3d}</h2>
					<div className='flex flex-wrap  justify-center   items-center gap-y-20  gap-[10vw]'>
						{projectsImages3d.map((image) => (
							<AnCard
								textVisible={true}
								title={image.title}
								key={image.id}
								src={image.src}
							/>
						))}
					</div>
					<div className='flex flex-col'>
						<h2 className='text-center text-2xl  font-bold mb-16 leading-[32.8px] text-white '>
							{dic.weProduce}
						</h2>
						<div className='flex flex-wrap  justify-center   items-center gap-y-20  gap-[10vw]'>
							{serviscesImages.map((image) => (
								<AnCard
									textVisible={true}
									title={image.title}
									key={image.id}
									src={image.src}
								/>
							))}
						</div>
					</div>
				</section>
				<section className=' our-characters  min-h-[90vh] w-full flex flex-col gap-20 items-center'>
					<AnTitle title={dic.ourPortfolio} />
					<div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid-rows-auto gap-5'>
						{ourCharacters.map((imagesSet, index) => (
							<AnImageFlipper key={index} imageSize={200} imagesSet={imagesSet} />
						))}
					</div>
				</section>
				<section className=' our-characters  min-h-[120vh] w-full flex flex-col gap-20 items-center'>
					<AnTitle title={dic.oldProjects} />
					{oldProjects.map((project) => {
						const years = Object.keys(project);
						return years.map((year) => (
							<div className='flex flex-col gap-4 xl:gap-0' key={year}>
								<h2 className='text-5xl  xl:mb-28 mb-24 font-bold text-primary-300 self:start xl:self-center'>
									{year}
								</h2>

								{project[year].map((prYear, index) => (
									<div
										key={index}
										className={` ${
											index % 2 === 0
												? 'xl:ms-[13px]'
												: 'xl:self-end xl:me-2'
										} flex gap-16 w-full  xl:w-[50%]  items-center  h-[29rem] xl:h-[13.7rem]`}>
										{index % 2 !== 0 && (
											<Image
												src='/images/lineD.png'
												className='-translate-y-24  xl:object-cover xl:object-bottom xl:w-[3.5rem] xl:h-[100%]'
												alt='line'
												width={23}
												height={240}
											/>
										)}

										<div className='flex flex-col gap-8 xl:gap-12 xl:flex-row '>
											<AnCard
												textVisible={false}
												title={''}
												src={prYear.pic}
											/>
											<div className='flex flex-col gap-4'>
												<h2 className=' font-bold text-lg'>
													{prYear[`title-${lang}`]}
												</h2>
												<p>{prYear[`desc-${lang}`]}</p>
											</div>
										</div>

										{index % 2 === 0 && (
											<Image
												src='/images/lineD.png'
												className=' -translate-y-24  -order-1 xl:order-1 xl:object-cover xl:object-bottom xl:w-[3.5rem] xl:h-[100%]'
												alt='line'
												width={23}
												height={240}
											/>
										)}
									</div>
								))}
							</div>
						));
					})}
				</section>
			</div>
		</>
	);
}
