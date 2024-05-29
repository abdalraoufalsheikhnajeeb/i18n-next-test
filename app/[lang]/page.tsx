// export default async function IndexPage({
//   params: { lang },
// }: {
//   params: { lang: Locale };
// }) {
//  const dic = await getDictionary(lang);

//   return (
//     <div>
//
//       <p>Current locale: {lang}</p>
//       <p>
//         This text is rendered on the server:{" "}
//         {{dic.welcome}
//       </p>
//       <Counter dic={dic} />
//     </div>
//   );
// }

import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';
import Counter from './components/counter';
import LocaleSwitcher from './components/locale-switcher';

import Image from 'next/image';
import AnButton from './components/AnButton';
import AnCard from './components/AnCard/AnCard';
import AnImageSwiper from './components/AnImageSwiper/AnImageSwiper';
import Link from 'next/link';
import { ourProjects } from './data';
import AnModel from './components/AnModel';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const dic = await getDictionary(lang);

	return (
		<div className='main min-h-screen'>
			<Image
				src='/images/bg-home.png'
				className=' fixed object-cover -z-10 w-screen h-screen'
				alt='arrow'
				width={1920}
				height={1080}
			/>
			<main dir={lang} className={' max-w-7xl w-[85vw] mx-auto  gap-4 flex items-center flex-col'}>
				<header className='h-[87vh]   flex flex-col w-full items-center justify-end gap-4'>
					<AnModel />
					<h2 className='text-5xl md:text-5xl max-w-2xl font-bold z-10 text-white  text-center'>
						{dic.homeText}
					</h2>

					<AnButton url={'/'} className='z-10'>
						<Image src='/images/reel.png' className='h-6' alt='arrow' width={30} height={30} />
						{dic.showReel}
					</AnButton>
				</header>
				<section className='w-full md:min-h-[80vh] flex flex-col-reverse md:flex-row items-center gap-4 z-10'>
					<div className='flex w-full  flex-col items-center gap-6 md:items-start'>
						<Image
							src='/images/logo.png'
							className='w-40 md:w-60'
							alt='arrow'
							width={250}
							height={200}
						/>
						<p>
							<span className='text-3xl font-bold'>{dic.ayatAnimation} </span>
							<span className='text-2xl'> {dic.prev1}</span>
						</p>
						<p className='text-lg'>{dic.prev2}</p>
					</div>
					<div className='flex md:h-full h-96 relative w-full '></div>
				</section>
				<section className='w-full md:min-h-[80vh] flex flex-col-reverse md:flex-row items-center gap-4 z-10'>
					<div className='flex w-full  flex-col items-center gap-16 md:items-start'>
						<h2 className='font-bold text-5xl'> {dic.some}</h2>
						<div className='flex flex-wrap justify-center md:justify-start items-center gap-8'>
							{ourProjects.slice(0, 4).map((image) => (
								<Link href={`/${lang}/Projects/${image.id}`} key={image.id}>
									<AnCard textVisible={false} title={image.title} src={image.src} />
								</Link>
							))}
						</div>
						{ourProjects.length > 4 && (
							<AnButton
								url={`/${lang}/AboutUs`}
								className=' justify-self-center self-center md:me-32'>
								<span>{dic.moreProjects}</span>
								<Image
									src='/images/moreArrow.png'
									className={` ${lang == 'ar' && 'rotate-180'} `}
									alt='arrow'
									width={20}
									height={30}
								/>
							</AnButton>
						)}
					</div>
					<div className='flex md:h-full h-96 relative w-full '></div>
				</section>
				<section className='gap-2 w-full md:min-h-[80vh] flex flex-col justify-center items-center md:flex-row z-10'>
					<div className='flex md:h-full h-96 relative w-full '></div>

					<div className='flex justify-center flex-col gap-16 items-center h-full relative w-full '>
						<h2 className='text-5xl font-bold '>{dic.latestWorkshops}</h2>
						<AnImageSwiper imageSize={400} />
					</div>
				</section>
				<section className=' gap-2 w-full md:min-h-[80vh] flex flex-col items-center md:flex-row '>
					<div className='flex md:h-full h-[60vh] relative w-full '></div>
					<div className='flex justify-center items-center flex-col md:flex-row h-full relative w-full'>
						<Image
							src='/images/logo.png'
							className='md:w-[30rem] w-48'
							alt='arrow'
							width={450}
							height={300}
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
