import Image from 'next/image';
import ContactForm from '../../components/ContactForm';
import { getDictionary } from '../../../../get-dictionary';

const ContactUs = async ({
  params: { lang },
}: {
  params: { lang: Locale };
  } ) => {
	
	const dic = await getDictionary(lang);

	return (
		<div className=' min-h-screen  pt-40 pb-20'>
			<Image
				src='/images/bg3.webp'
				className='absolute w-full h-full object-cover top-0 left-0 -z-10'
				alt='bg'
				width={1920}
				height={1080}
			/>

			<div className='bg-white bg-opacity-30 border border-stone-300 p-6 pt-8 rounded-[35px] backdrop-blur-xl mx-auto max-w-[21.75rem] sm:max-w-sm xl:mr-72 md:max-w-xl lg:max-w-[40rem]'>
				<h2 className='text-xl font-bold mb-4'>{dic.contactUsTitle}</h2>
				<ContactForm lang={lang} />
			</div>
		</div>
	);
};

export default ContactUs;
