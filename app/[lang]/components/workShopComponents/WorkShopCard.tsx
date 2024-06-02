import '../AnCard/AnCard.css';
const WorkShopCard = ({
	src,
	title,
	textVisible,
	lang,
}: {
	src: string;
	title: string;
	textVisible: boolean;
	lang: string;
}) => {
	return (
		<div className='relative card-container'>
			<Image className='an-card' width={240} height={240} src={src} alt='WorkShop-Card' />

			<div className={`image-behind ${lang}`}></div>
			<div className={`gradiant-effect ${textVisible && 'Visible'} `}></div>
			<span className={`hover-text break-words w-[90%] ${textVisible && 'textVisible'} `}>{title}</span>
		</div>
	);
};

export default WorkShopCard;
