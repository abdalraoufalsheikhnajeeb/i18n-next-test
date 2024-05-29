const AnTitle = ({ title }) => {
	return (
		<>
			<h2 className='text-center text-2xl z-10 font-bold capitalize text-white'>
				<span className='relative before:content-title before:absolute before:w-[150%] before:-left-10 before:z-[-1]'>
					{title}
				</span>
			</h2>
		</>
	);
};

export default AnTitle;
