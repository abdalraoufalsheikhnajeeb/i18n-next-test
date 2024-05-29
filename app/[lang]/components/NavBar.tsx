'use client';
import { i18n } from '../../../i18n-config';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { navLinks } from '../data';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../get-dictionary';

const Navbar = ({ params: { lang } , dic }: { params: { lang: Locale }; dic: Awaited<ReturnType<typeof getDictionary>> }) => {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
	const toggleBurger = () => {
		setIsBurgerOpen(!isBurgerOpen);
	};

	useEffect(() => {
		// Retrieve the selectedPageIndex from localStorage on component mount
		const storedPageIndex = localStorage.getItem('selectedPageIndex');
		if (storedPageIndex !== null) {
			setSelectedPageIndex(parseInt(storedPageIndex));
		}
	}, []);
	useEffect(() => {
		const handleResize = () => {
			if (!isMobile) {
				setIsBurgerOpen(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isMobile]);

	const [selectedPageIndex, setSelectedPageIndex] = useState(0);
	const pathname = usePathname();

	useEffect(() => {
		const foundIndex = navLinks.findIndex((navLink) => `/${lang}/${navLink.url}` === pathname);
		setSelectedPageIndex(foundIndex !== -1 ? foundIndex : 0);
	}, [lang, pathname]);
	return (
		<nav
			className={`
				
			 backdrop-blur-md backdrop-brightness-75 h-20 w-full px-[5vw] py-2 flex items-center top-0 justify-between z-[100] fixed`}>
			<Image
				className='flex-shrink-0 h-full   '
				width={100}
				height={80}
				src='/images/logo.png'
				alt='Logo'
			/>

			<div className='hidden lg:flex ms-10  items-baseline space-x-4'>
				{navLinks.map((navLink) => (
					<Link
						key={navLink.url}
						onClick={() => {
							setSelectedPageIndex(navLink.index);
						}}
						href={`/${lang}/${navLink.url}`}
						className={`text-white text-xl z-20 relative hover:bg-primary-500/40 hover:text-white px-3 py-2 rounded-md ${
							selectedPageIndex === navLink.index ? 'font-bold' : ''
						}`}>
						{`${dic}.${navLink.url}`}
						{selectedPageIndex === navLink.index && (
							<div className='absolute left-1/2 -translate-x-1/2  bottom-1 bg-white w-8 h-[2px]'>
								{' '}
							</div>
						)}
					</Link>
				))}
			</div>
			<div className='flex items-center h-14 gap-4'>
				{i18n.locales
					.filter((l) => lang !== l)
					.map((l, index) => {
						return (
							<Link
								className={`flex items-center justify-center ${
									lang === 'en' ? 'font-ar' : 'font-en'
								} self-end   gap-3`}
								href={`/${l}`}
								key={l}>
								<Image
									src={`/images/${lang}.png`}
									width={50}
									height={50}
									alt='language'
									className='rounded-lg'
								/>
								{dic.lang}
							</Link>
						);
					})}
				<Link
					href={`/${lang}/ContactUs`}
					className=' w-52 hidden border-solid border-white shadow-[0px_23px_32px_0px_rgba(104,_42,_97,_0.26)] lg:flex lg:flex-row lg:justify-center pt-3 h-12 items-start border-2 rounded-[32px]'>
					<span className='text-center font-bold text-white'>{dic.getInTouch}</span>
				</Link>
				<Image
					className={`cursor-pointer ${
						isBurgerOpen && 'h-16 w-16'
					} shrink-0  z-10 -me-2 flex lg:hidden`}
					onClick={toggleBurger}
					src={isBurgerOpen ? '/images/Cart.png' : '/images/burger_menu.png'}
					width={50}
					height={50}
					alt='language'
				/>
			</div>
			{isBurgerOpen && (
				<>
					<div className='nav-items-container'>
						{navLinks.map((navLink) => (
							<Link
								key={navLink.url}
								onClick={() => {
									setSelectedPageIndex(navLink.index);
									setIsBurgerOpen(false);
								}}
								href={`/${lang}/${navLink.url}`}
								className={`text-white text-xl z-20 relative hover:bg-primary-500/40 hover:text-white px-3 py-2 rounded-md ${
									selectedPageIndex === navLink.index ? 'font-bold' : ''
								}`}>
								{`${dic}.${navLink.url}`}
								{selectedPageIndex === navLink.index && (
									<div className='absolute left-1/2 -translate-x-1/2  bottom-1 bg-white w-8 h-[2px]'>
										{' '}
									</div>
								)}
							</Link>
						))}
						<Link
							href={`/${lang}/ContactUs`}
							className=' w-[80vw] flex  bg-white shadow-[0px_23px_32px_0px_rgba(104,_42,_97,_0.26)]  justify-center items-center  h-12  mt-48 rounded-[32px]'
							onClick={toggleBurger}>
							<span className='text-center font-bold text-primary-500'>
								{dic.getInTouch}
							</span>
						</Link>
					</div>

					<Image
						src={`/images/blur.webp`}
						className='blurred-background'
						width={10}
						height={10}
						alt='language'
					/>
				</>
			)}
		</nav>
	);
};

export default Navbar;
