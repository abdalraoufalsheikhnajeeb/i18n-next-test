import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
export default async function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);
  return <div></div>;
}
