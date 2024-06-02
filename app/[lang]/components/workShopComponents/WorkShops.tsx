import * as Api from '../../../../Services/api';
import WorkShopCard from './WorkShopCard';
import AnTitle from '../AnTitle';
import { getDictionary } from '../../../../get-dictionary';
import { Locale } from '../../../../i18n-config';
import Link from 'next/link';

type WorkShopResponse = Api.ApiResponse<Api.WorkShop[]>;

type WorkShopsProps = {
	dic: Awaited<ReturnType<typeof getDictionary>>;
	workshops: Api.WorkShop[];
	lang: Locale;
};

function WorkShops({ dic, workshops, lang }: WorkShopsProps) {
	return (
		<section className='min-h-[60vh] w-full flex flex-col gap-20 items-center'>
			<AnTitle title={dic?.OurWorkShop} />
			<div className='flex flex-wrap justify-center items-center gap-y-20 gap-[10vw]'>
				{workshops.map((workShop) => (
					<Link href={`WorkShops/${workShop?.Names?.Name}/${workShop?.Id}`} key={workShop?.Id}>
						<WorkShopCard
							key={workShop?.Id}
							lang={lang}
							textVisible={false}
							title={workShop?.Names?.Name}
							src={workShop?.Images[0]}
						/>
					</Link>
				))}
			</div>
		</section>
	);
}

export default WorkShops;
