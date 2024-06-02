import Image from 'next/image';
import '../AnCard/AnCard.css';
const OldProjectsCard = ({ src, lang }: { src: string; lang: string }) => {
	return (
		<div className='relative card-container'>
			<Image className='an-card' width={240} height={240} src={src} alt='Old Projects Card' />
			<div className={`image-behind ${lang}`}></div>
		</div>
	);
};

export default OldProjectsCard;
