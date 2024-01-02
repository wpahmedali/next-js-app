import dynamic from 'next/dynamic';
import { capitalizeWord } from 'utils/capitalize-word';

export const getCountryIcon = (str: string): JSX.Element => {
  let iconName = capitalizeWord(str.replace('flag ', '')) + 'Flag';

  const FlagIcon = dynamic((): any => import(`src/flag-icons/${iconName}`), {
    ssr: false,
  });

  return FlagIcon ? <FlagIcon /> : <></>;
};
