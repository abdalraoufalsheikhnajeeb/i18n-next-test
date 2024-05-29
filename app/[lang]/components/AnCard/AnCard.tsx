import Image from 'next/image'
import React from 'react'
import './AnCard.css';
const AnCard = ({ src, title, textVisible }) => {
	return (
		<div className='relative card-container'>
			<Image className='an-card' width={240} height={240} src={src} alt='image' />

			<div className='image-behind'></div>
			<div className={`gradiant-effect ${textVisible && 'Visible'} `}></div>
			<span className={`hover-text ${textVisible && 'textVisible'} `}>{title}</span>
		</div>
	);
};

export default AnCard