// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';

// import { type getDictionary } from '../../get-dictionary';
// const NotFound = async ({ dic }: { dic: Awaited<ReturnType<typeof getDictionary>> }) => {

// 	return (
// 		<div className=''>
// 			<div className='flex flex-col justify-center items-center min-h-screen gap-2'>
// 				<Image src={'/images/404.png'} alt='404' width={300} height={300} />
// 				<h2>{dic?.notFound}</h2>
// 				<p>{dic?.notFoundDesc}</p>
// 				<Link href='/'>{dic?.returnHome}</Link>
// 			</div>
// 		</div>
// 	);
// };

// export default NotFound;

// pages/404.js

import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
	return (
		<div className='flex flex-col justify-center items-center min-h-screen gap-2'>
			<Image src='/images/404.png' alt='404' width={300} height={300} />
			<h2>Page Not Found</h2>
			<p>Sorry, the page you are looking for does not exist.</p>
			<Link href='/'>
				<a>Return Home</a>
			</Link>
		</div>
	);
};

export default NotFound;
