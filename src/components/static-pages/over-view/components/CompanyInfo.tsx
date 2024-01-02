const CompanyInfo = () => {
  return (
    <div className="md:pr-12">
      <h3 className="text-3xl font-semibold">Company Information</h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <tbody>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-b bg-gray-400 border-neutral-300">
                      Company Name
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      Jan Trading Co.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-b  bg-gray-400 border-neutral-300">
                      Establishment
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      May, 17, 1999
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-b  bg-gray-400 border-neutral-300">
                      Representative Director and President
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      Muhammad Nazar Jan
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-b  bg-gray-400 border-neutral-300">
                      Head Office Location
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      9-49, Onohama-cho, Chuo-Ku, Kobe-city, Hyogo-prf, 651-0082
                      Japan TEL: +81-78-321-5220 FACSIMILE +81-78-321-5221
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-b  bg-gray-400 border-neutral-300">
                      Business Base
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      13 domestic sites, 30 overseas, as of February 2018
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-b  bg-gray-400 border-neutral-300">
                      Number Of Employees
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      158 domestic, 639 overseas * as of SEPTEMBER 2019
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-b  bg-gray-400 border-neutral-300">
                      Business Contents
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      Sales and import-export of used cars Sales, import-export
                      of automotive parts and supplies
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-b  bg-gray-400 border-neutral-300">
                      Amount Of Stated Capital
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      ¥ 70,000,000
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-b  bg-gray-400 border-neutral-300">
                      URL
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      www.jantradingco.jp (corporate site) www.janjapan.com
                      (export sales site)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyInfo;
