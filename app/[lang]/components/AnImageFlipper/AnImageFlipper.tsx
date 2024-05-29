import './AnImageFlipper.css';
import Image from 'next/image';
const AnImageFlipper = ({ imageSize, imagesSet }) => {
	return (
		<div className='flipper-img-card-container'>
			{imagesSet.map((image) => (
				<Image
					className='flipper-img-card'
					key={image.id}
					width={imageSize}
					height={imageSize}
					src={image.src}
					alt='image'
				/>
			))}
		</div>
	);
};

export default AnImageFlipper;
