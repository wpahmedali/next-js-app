import { IDropdownData } from '../interfaces/dropdown-data.interface';
import { IDropdownItem } from '../interfaces/dropdown-item.interface';
import {
  BriefcaseIcon,
  DocumentMagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const aboutUs: IDropdownItem[] = [
  {
    name: 'Our Japan Offices',
    description: 'Our All of the Offices Linked Blow',
    href: '/japan-offices',
    icon: (
      <BriefcaseIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'OverView',
    description: 'OverView All our the Companies',
    href: '/company-overview-of-jans-group#overview',
    icon: (
      <DocumentMagnifyingGlassIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Why Jans Groups',
    description: 'Why Choose Jan Japan',
    href: '/why-choose-jan-japan-group',
    icon: (
      <QuestionMarkCircleIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Awards',
    description: 'Awards & Achievements',
    href: '/awards-and-achievements-by-jan-japan#awards',
    icon: (
      <TrophyIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Partners',
    description: 'Our Trusted Partners',
    href: '/business-partners-of-jans-group#partners',
    icon: (
      <UserGroupIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
];

export const aboutUsData: IDropdownData = {
  data: aboutUs,
  isLoading: false,
  isError: false,
  isSuccess: true,
};
