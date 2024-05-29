'use client';
import { useState } from 'react';
import { ourProjects } from '../data';
import Link from 'next/link';
import AnCard from './AnCard/AnCard';
import { getDictionary } from '../../../get-dictionary';

const ItemsPerPage = 6;

const AnPagination = ({lang }: {lang:string}) => {

	
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(ourProjects.length / ItemsPerPage);
	const startIndex = (currentPage - 1) * ItemsPerPage;
	const visibleItems = ourProjects.slice(startIndex, startIndex + ItemsPerPage);
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<>
			<div className='flex min-h-[35rem] w-full  flex-wrap  justify-center   items-start gap-y-20  gap-[10vw]'>
				{visibleItems.map((image) => (
					<Link href={`/${lang}/Projects/${image.id}`} key={image.id}>
						<AnCard textVisible={false} title={image.title} src={image.src} />
					</Link>
				))}
			</div>
			<div className='flex justify-center mt-4'>
				{Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
					<button
						key={page}
						className={`mx-1 px-5  p-2  rounded-md  ${
							currentPage === page ? 'bg-primary-600 text-white font-bold' : 'bg-gray-300'
						}`}
						onClick={() => handlePageChange(page)}>
						{page}
					</button>
				))}
			</div>
		</>
	);
};

export default AnPagination;
