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
