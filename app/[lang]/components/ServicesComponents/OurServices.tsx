import * as Api from '../../../../Services/api';
import ServiceCard from './ServiceCard';
import { Service, ApiResponse } from '../../../../Services/api';
import AnTitle from '../AnTitle';
import Link from 'next/link';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../get-dictionary';

type OurServicesProps = {
	dic: Awaited<ReturnType<typeof getDictionary>>;
	services: Service[];
	lang: Locale;
};

function OurServices({ dic, services, lang }: OurServicesProps) {
	return (
		<section className='min-h-[60vh] w-full flex flex-col gap-20 items-center '>
			<AnTitle title={dic?.threeD} />

			<div className='flex flex-wrap justify-center items-center gap-y-20 gap-[10vw]'>
				{services.map((service) => (
					<Link href={`services/${service?.ServiceName?.Name}/${service?.Id}`} key={service?.Id}>
						<ServiceCard
							lang={lang}
							textVisible={false}
							title={service?.ServiceName?.Name}
							key={service?.Id}
							src={service?.Images[0]}
						/>
					</Link>
				))}
			</div>
		</section>
	);
}

export default OurServices;
