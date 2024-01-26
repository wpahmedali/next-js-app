import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { useCountryCount } from 'src/hooks/country-count';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';

export interface IMakerModelItemProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof makerModelItemClass> {
  url: string;
  model: string;
  modelCount: number;
  setIsHovered: any;
}

const WebMakerModelItem = ({
  url,
  model,
  modelCount,
  isActive,
  setIsHovered,
}: IMakerModelItemProps): JSX.Element => {
  const setLoadingState = useDispatchLoadingState();
  const countryCount = useCountryCount();

  return (
    <li>
      <Link
        onClick={() => {
          setLoadingState({ type: 'makerLoader' });
          setIsHovered(false);
        }}
        href={url}
        className={makerModelItemClass({ isActive })}
      >
        <span className="mr-2">{model.toUpperCase()}</span>
        {countryCount && <span className="mr-2">{modelCount}</span>}
      </Link>
    </li>
  );
};

const makerModelItemClass = cva(
  [
    'block',
    'px-4',
    'py-2',
    'border-b',
    'border-gray-600',
    'hover:bg-gray-100',
    'hover:text-black',
    'justify-between',
    'flex',
  ],
  {
    variants: {
      isActive: {
        true: ['text-xs bg-white', 'text-black'],
        false: [''],
      },
    },
  }
);

export default WebMakerModelItem;
