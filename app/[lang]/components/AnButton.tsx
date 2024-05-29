import Link from "next/link";


type Props = {
	children: any;
	className?: string;
	url?: string;
	onClick?: (e?: any) => void;
};
const AnButton = ({ children, className, url,  }: Props) => {
	return (
		<Link
			
			href={url}
			className={`text-center cursor-pointer text-xl flex justify-center items-center gap-2 font-bold text-primary-500 bg-white  border-none  h-16 w-auto  py-2 px-8 rounded-full outline-0 ${className}`}>
			{children}
		</Link>
	);
};

export default AnButton;
