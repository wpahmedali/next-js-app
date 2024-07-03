import Image from 'next/image';

const CompanyInfo = () => {
  return (
    <div className="text-gray-900 pr-0 pb-14 pl-0 bg-white">
      <div
        className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
        max-w-full"
      >
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="w-full">
            <div className="block">
              <div className="relative object-cover rounded-lg max-h-64 sm:max-h-96 btn-w-full h-full">
                <Image
                  src="/asset/images/profile/japan-office.jpg"
                  alt=""
                  priority={true}
                  width={1200}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="w-full ml-auto mr-auto">
            <div className="">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-center">
                        <tbody>
                          <tr className="">
                            <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                              Company Name
                            </td>
                            <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                              Jan Trading Co.
                            </td>
                          </tr>
                          <tr className="">
                            <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                              Establishment
                            </td>
                            <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                              May, 17, 1999
                            </td>
                          </tr>
                          <tr className="">
                            <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                              Representative Director and Presiden
                            </td>
                            <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                              Muhammad Nazar Jan
                            </td>
                          </tr>
                          <tr className="">
                            <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                              Head Office Location
                            </td>
                            <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                              9-49, Onohama-cho, Chuo-Ku, Kobe-city, Hyogo-prf,
                              651-0082 Japan TEL: +81-78-321-5220 FACSIMILE
                              +81-78-321-5221
                            </td>
                          </tr>
                          <tr className="">
                            <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                              Business Base
                            </td>
                            <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                              13 domestic sites, 30 overseas, as of February
                              2018
                            </td>
                          </tr>
                          <tr className="">
                            <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                              Number Of Employees
                            </td>
                            <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                              158 domestic, 639 overseas * as of SEPTEMBER 2019
                            </td>
                          </tr>
                          <tr className="">
                            <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                              Business Contents
                            </td>
                            <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                              Sales and import-export of used cars Sales,
                              import-export of automotive parts and supplies
                            </td>
                          </tr>
                          <tr className="">
                            <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                              Amount Of Stated Capital
                            </td>
                            <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                              ¥ 70,000,000
                            </td>
                          </tr>
                          <tr className="">
                            <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                              URL
                            </td>
                            <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                              www.jantradingco.jp (corporate site)
                              www.janjapan.com (export sales site)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyInfo;
