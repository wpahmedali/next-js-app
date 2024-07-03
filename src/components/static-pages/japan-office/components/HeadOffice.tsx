import Image from 'next/image';

const HeadOffice = () => {
  return (
    <div className="flex flex-col items-center sm:px-5 md:flex-row">
      <div className="w-full md:w-3/4 ml-auto mr-auto">
        <div className="">
          <h3 className="text-3xl font-semibold text-black p-2">
            KOBE HEAD OFFICE
          </h3>
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
                          Office Address
                        </td>
                        <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                          651-0082, HYOGO PREFECTURE, KOBE CITY, CHUO-KU,
                          ONOHAMACHO, 9-49
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                          Tel. No
                        </td>
                        <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                          +81783215220
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                          Fax No
                        </td>
                        <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                          +81783215221
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                          Email
                        </td>
                        <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                          info@jantradingco.jp
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border-neutral-300">
                          Employes Count
                        </td>
                        <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                          55
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
      <div className="w-full md:w-1/4">
        <div className="block max-h-64 sm:max-h-96 w-full h-full">
          <Image
            src="/asset/images/profile/kobe-office.jpg"
            alt=""
            width={300}
            height={200}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
export default HeadOffice;
