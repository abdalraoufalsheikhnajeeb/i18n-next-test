import { carouselImages } from '../../data';
import './AnImageSwiper.css';
import Image from 'next/image';
const AnImageSwiper = ({ imageSize }) => {

	return (
		<div className='swiper-card-container'>
			{carouselImages.map((image) => (
				<Image
					className='img-card'
					key={image.id}
					width={imageSize}
					height={imageSize}
					src={image.src}
					alt='image'
				/>
			))}
			<div className={`image-behind h-[${imageSize}px] w-[${imageSize}px]`}></div>
		</div>
	);
};

export default AnImageSwiper;
