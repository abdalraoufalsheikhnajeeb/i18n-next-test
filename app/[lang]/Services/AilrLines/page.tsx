import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import Partners from "../../components/Partners";
import { partners } from "../../data";
import { agents } from "../../data";
export default async function  page({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dic = await getDictionary(lang);
  return (
    <div>
 <Partners dic={dic} data={partners}/>
 <Partners dic={dic} data={agents}/>


    </div>
  )
}
