import { Disclosure } from '@headlessui/react';
import Loading from 'components/loading';
import Error from 'components/error';
import Link from 'next/link';
import { IDropdown } from '../../interfaces/dropdown.interface';
import { useState } from 'react';

const Dropdown = ({ data, title }: IDropdown): JSX.Element => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="py-0">
          <Disclosure as="div" className="m-auto">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-5 text-xs font-normal text-white">
                  {title}
                  {/* <ChevronDownIcon
                    className={classNames(
                      open ? 'rotate-180' : '',
                      'h-5 w-5 flex-none'
                    )}
                    aria-hidden="true"
                  /> */}
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2 absolute bottom-16 left-0 bg-gray-200 w-full overflow-scroll menu-height pt-3">
                  {data.isLoading && <Loading />}
                  {data.isError && !data.isLoading && <Error />}
                  {data.isSuccess &&
                    data.data.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        className="block rounded-md py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 shadow-sm hover:bg-primary border mx-2 border-gray-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <a
            href="#"
            className="mx-3 rounded-lg px-3 hidden py-2 text-base font-semibold leading-7 text-gray-900"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
