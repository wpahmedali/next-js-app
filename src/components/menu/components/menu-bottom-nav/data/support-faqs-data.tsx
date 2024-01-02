import {
  ChatBubbleBottomCenterIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { IDropdownItem } from '../interfaces/dropdown-item.interface';
import { IDropdownData } from '../interfaces/dropdown-data.interface';

const supportFaqs: IDropdownItem[] = [
  {
    name: 'FAQS',
    description: ' Frequently Asked Question',
    href: '#',
    icon: (
      <ChatBubbleBottomCenterIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'General Questions',
    description: 'General Questions about used Japanese',
    href: '/general-faqs-about-used-japanese-cars',
    icon: (
      <ChatBubbleBottomCenterIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Inventory',
    description: "FAQ's about Cars Inventory",
    href: '/faqs-about-cars-inventory',
    icon: (
      <ChatBubbleBottomCenterIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Buying & Paying',
    description: 'Car Buying and Payment Procedures',
    href: '/faqs-about-car-buying-and-payment-procedures',
    icon: (
      <ChatBubbleBottomCenterIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Booking & Shipping',
    description: 'Car Booking and Shipping',
    href: '/faqs-about-car-booking-and-shipping',
    icon: (
      <ChatBubbleBottomCenterIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Documentation',
    description: 'Japanese Cars Documents',
    href: '/faqs-about-used-japanese-cars-documents',
    icon: (
      <ChatBubbleBottomCenterIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Shipment Receipt',
    description: 'Shipment and Receipt of your Car',
    href: '/faqs-about-shipment-and-receipt-of-your-car',
    icon: (
      <ChatBubbleBottomCenterIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Country Regulations',
    description: "FAQ's about Country Regulations",
    href: '/faqs-about-country-import-export-regulations',
    icon: (
      <ChatBubbleBottomCenterIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Glossary Of Terms',
    description: "FAQ's about Glossary of Terms",
    href: '/faqs-about-glossary-of-terms-when-buying-used-japenes-cars',
    icon: (
      <ChatBubbleBottomCenterIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Shipping Agents',
    description: 'Our Shipping Agents',
    href: '/associated-shipping-companies-of-jan-japan',
    icon: (
      <UsersIcon
        className="h-6 w-6 text-white-600 group-hover:text-primaryDark"
        aria-hidden="true"
      />
    ),
  },
];

export const supportFaqsData: IDropdownData = {
  data: supportFaqs,
  isLoading: false,
  isError: false,
  isSuccess: true,
};
