import { FavouriteIcon, LoginIcon, SignupIcon } from 'icons';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import { IDropdownItem } from '../interfaces/dropdown-item.interface';
import {
  BriefcaseIcon,
  DocumentMagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const signUp: IDropdownItem[] = [
  {
    name: 'Login',
    description: '',
    href: '#',
    icon: (
      <LoginIcon
      className="h-6 w-6 text-black-600 group-hover:text-primaryDark"
        aria-hidden="true"/>
    ),
  },
  {
    name: 'Sign Up',
    description: '',
    href: '#',
    icon: (
      <SignupIcon
      className="h-6 w-6 text-black-600 group-hover:text-primaryDark"
        aria-hidden="true"/>
    ),
  },
  {
    name: 'Favourites',
    description: '',
    href: '#',
    icon: (
      <FavouriteIcon/>
      // <QuestionMarkCircleIcon
      //   className="h-6 w-6 text-black-600 group-hover:text-primaryDark"
      //   aria-hidden="true"
      // />
    ),
  },
  
];

export const signUpData: IDropdownData = {
  data: signUp,
  isLoading: false,
  isError: false,
  isSuccess: true,
};
