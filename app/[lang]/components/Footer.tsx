import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../../../get-dictionary';
import { Locale } from '../../../i18n-config';
export const Footer = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const dic = await getDictionary(lang);

	
	return (
		<footer className={`footer pt-10 flex pb-4 justify-center items-center flex-col gap-10 w-full`}>
			<span className='text-xl'>{dic?.followUs}</span>
			<div className='flex  gap-4'>
				<a title='x' target='_blank' href={''} className='bg-white border border-accent relative flex justify-center items-center h-12 w-12 rounded-md'>
					<Image
						className='w-[70%]'
						src={'/images/whats.svg'}
						width={50}
						height={50}
						alt={'whatsapp icon'}
					/>
					
				</a>

				<a title='LinkedIn' target='_blank' href={''} className='bg-white border border-accent relative flex justify-center items-center h-12 w-12 rounded-md'>
					<Image
						className=' w-[70%]'
						src={'/images/in.png'}
						width={50}
						height={50}
						alt={'social-icon'}
					/>
					
				</a>
				<a title='instagram' target='_blank' href={''} className='bg-white border border-accent relative flex justify-center items-center h-12 w-12 rounded-md'>
					<Image
						className=' w-[70%]'
						src={'/images/insta.png'}
						width={50}
						height={50}
						alt={'social-icon'}
					/>
					
				</a>
				<a title='facebook' target='_blank' href={''} className='bg-white border border-accent relative flex justify-center items-center h-12 w-12 rounded-md'>
					<Image
						className=' w-[70%]'
						src={'/images/face.png'}
						width={50}
						height={50}
						alt={'social-icon'}
					/>
					
				</a>
			</div>
			<div className='z-10 flex flex-col md:flex-row'>
				<span className='text-center'>{dic?.copyRights}</span>
				<span className='text-center ms-4'>
					<Link href='/'>{dic?.privacy}</Link> | <Link href='/'> {dic?.terms}</Link>
				</span>{' '}
			</div>
		</footer>
	);
};
