import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { IDropdownItem } from '../interfaces/dropdown-item.interface';

const iconClasses: string = 'h-5 w-5 flex-none text-gray-400';

export const callsToActionData: IDropdownItem[] = [
  {
    name: 'Watch demo',
    href: '#',
    icon: <PlayCircleIcon className={iconClasses} aria-hidden={true} />,
  },
  {
    name: 'Contact sales',
    href: '#',
    icon: <PhoneIcon className={iconClasses} aria-hidden={true} />,
  },
];
