import AnButton from '../../components/AnButton';
import Image from 'next/image';

export const CareerCard = ({ img, title, JobDesc }: { img: string | null; title: string; JobDesc: string }) => {

	const fallbackImage = '/path/to/placeholder/image.jpg'; // Provide a path to a placeholder image

	return (
		<div className='bg-white bg-opacity-30 border w-full flex justify-between gap-5 border-stone-300 p-4 rounded-[35px] backdrop-blur-xl'>
			<Image
				className='rounded-2xl w-full md:w-52 md:h-52'
				src={img || fallbackImage}
				alt={title}
				width={200}
				height={200}
			/>
			<div className='flex flex-col items-start justify-center gap-2 w-full'>
				<h2 className='text-xl font-bold'>{title}</h2>
				<p className='mt-2 line-clamp-2 md:line-clamp-none'>{JobDesc}</p>

				<AnButton className='hidden mt-4 md:flex'>learn More</AnButton>
			</div>
		</div>
	);
};
