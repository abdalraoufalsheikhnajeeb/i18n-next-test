'use client';
import { SetStateAction, useState } from 'react';
import { ourProjects } from '../data';
import Link from 'next/link';
import AnCard from './AnCard/AnCard';
import { type getDictionary } from '../../../get-dictionary';
const ItemsPerPage = 6;

const AnPagination = ({ dic }: { dic: Awaited<ReturnType<typeof getDictionary>> }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(ourProjects.length / ItemsPerPage);
	const startIndex = (currentPage - 1) * ItemsPerPage;
	const visibleItems = ourProjects.slice(startIndex, startIndex + ItemsPerPage);
	const handlePageChange = (page: SetStateAction<number>) => {
		setCurrentPage(page);
	};

	return (
		<>
			<div className='flex min-h-[35rem] w-full flex-wrap justify-center items-start gap-y-20 gap-10'>
				{visibleItems.map((card) => (
					<Link href={`/${dic?.currLang}/Projects/${card.id}`} key={card.id}>
						<AnCard desc={card.desc}  title={card.title} src={card.src} />
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
