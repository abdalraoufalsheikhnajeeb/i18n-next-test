// components/LocationCard.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface LocationCardProps {
	flagSrc: string;
	images: string[];
	googleMapsUrl: string;
	locationName: string;
}

const Slider = dynamic(() => import('react-slick').then((mod) => mod.default), { ssr: false });

const LocationCard: React.FC<LocationCardProps> = ({ flagSrc, images, googleMapsUrl, locationName }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className='max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4'>
			<div className='flex items-center p-4'>
				<img src={flagSrc} alt={`${locationName} flag`} className='w-10 h-10 mr-4' />
				<h2 className='text-xl font-bold'>{locationName}</h2>
			</div>
			<Slider {...settings}>
				{images.map((image, index) => (
					<div key={index}>
						<img src={image} alt={`Office ${index + 1}`} className='w-full h-64 object-cover' />
					</div>
				))}
			</Slider>
			<div className='p-4'>
				<a
					href={googleMapsUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='block w-full text-center bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300'>
					Find Us on Google Maps
				</a>
			</div>
		</div>
	);
};

export default LocationCard;
