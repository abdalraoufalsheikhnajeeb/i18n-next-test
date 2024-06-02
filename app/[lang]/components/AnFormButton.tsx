'use client'

import { type getDictionary } from '../../../get-dictionary';

type Props = {
	children: any;
	className?: string;
	url?: string;
	onClick?: (e?: any) => void;
	dic: Awaited<ReturnType<typeof getDictionary>>
};

const AnFormButton = ({ children, className, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			type='submit'
			className={`text-center cursor-pointer text-xl flex justify-center items-center gap-2 font-bold text-primary-500 bg-white  border-none  h-16 w-auto  py-2 px-8 rounded-full outline-0 ${className}`}>
			{children}
		</button>
	);
};

export default AnFormButton;
