const CompanyInfo = () => {
  return (
    <section className="">
      <h3 className="bg-primary text-[#000000] font-bold text-xl py-2 pl-5">Company Information</h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <tbody>
                  <tr className="border-4 border-t-[#000] border-b-[#000] bg-[#555555] border-x-0">
                    <td className="w-96 text-left sm:text-[14px] text-xl text-primary font-medium py-2 pl-5">
                      Company Name
                    </td>
                    <td className="text-left text-md text-white py-2 pl-5 border-4 border-l-[#000] border-t-[#000] border-b-[#000] border-r-0">
                      Jan Trading Co.
                    </td>
                  </tr>
                  <tr className="border-4 border-t-[#000] border-b-[#000] bg-[#706F6F] border-x-0">
                    <td className="w-96 text-left text-xl sm:text-[14px] text-primary font-medium py-2 pl-5">
                      Establishment
                    </td>
                    <td className="text-left text-md text-white py-2 pl-5 border-4 border-l-[#000] border-t-[#000] border-b-[#000] border-r-0">
                      May, 17, 1999
                    </td>
                  </tr>
                  <tr className="border-4 border-t-[#000] border-b-[#000] bg-[#555555] border-x-0">
                    <td className="w-96 text-left text-xl text-primary font-medium py-2 pl-5">
                      Chairman and CEO
                    </td>
                    <td className="text-left text-md text-white py-2 pl-5 border-4 border-l-[#000] border-t-[#000] border-b-[#000] border-r-0">
                      Muhammad Nazar Jan
                    </td>
                  </tr>
                  <tr className="border-4 border-t-[#000] border-b-[#000] bg-[#706F6F] border-x-0">
                    <td className="w-96 text-left text-xl text-primary font-medium py-2 pl-5">
                      Head Office Location
                    </td>
                    <td className="text-left text-md text-white py-2 pl-5 border-4 border-l-[#000] border-t-[#000] border-b-[#000] border-r-0">
                      9-49, Onohama-cho, Chuo-Ku, Kobe-city, Hyogo-prf, 651-0082 Japan <br/>TEL: +81-78-321-5220 FACSIMILE +81-78-321-5221
                    </td>
                  </tr>
                  <tr className="border-4 border-t-[#000] border-b-[#000] bg-[#555555] border-x-0">
                    <td className="w-96 text-left text-xl text-primary font-medium py-2 pl-5">
                      Business Base
                    </td>
                    <td className="text-left text-md text-white py-2 pl-5 border-4 border-l-[#000] border-t-[#000] border-b-[#000] border-r-0">
                      13 domestic sites, 30 overseas, as of February 2018
                    </td>
                  </tr>
                  <tr className="border-4 border-t-[#000] border-b-[#000] bg-[#706F6F] border-x-0">
                    <td className="w-96 text-left text-xl text-primary font-medium py-2 pl-5">
                      Number Of Employees
                    </td>
                    <td className="text-left text-md text-white py-2 pl-5 border-4 border-l-[#000] border-t-[#000] border-b-[#000] border-r-0">
                      158 domestic, 639 overseas * as of SEPTEMBER 2019
                    </td>
                  </tr>
                  <tr className="border-4 border-t-[#000] border-b-[#000] bg-[#555555] border-x-0">
                    <td className="w-96 text-left text-xl text-primary font-medium py-2 pl-5">
                      Business Contents
                    </td>
                    <td className="text-left text-md text-white py-2 pl-5 border-4 border-l-[#000] border-t-[#000] border-b-[#000] border-r-0">
                      Sales and import-export of used cars <br/>Sales, import-export of automotive parts and supplies
                    </td>
                  </tr>
                  <tr className="border-4 border-t-[#000] border-b-[#000] bg-[#706F6F] border-x-0">
                    <td className="w-96 text-left text-xl text-primary font-medium py-2 pl-5">
                      Amount Of Stated Capital
                    </td>
                    <td className="text-left text-md text-white py-2 pl-5 border-4 border-l-[#000] border-t-[#000] border-b-[#000] border-r-0">
                      ¥ 70,000,000
                    </td>
                  </tr>
                  <tr className="border-4 border-t-[#000] border-b-[#000] bg-[#555555] border-x-0">
                    <td className="w-96 text-left text-xl text-primary font-medium py-2 pl-5 border-b-[#000]">
                      URL
                    </td>
                    <td className="text-left text-md text-white py-2 pl-5 border-4 border-l-[#000] border-t-[#000] border-b-[#000] border-r-0">
                      www.jantradingco.jp (corporate site)<br/> www.janjapan.com (export sales site)
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </section>
  );
};
export default CompanyInfo;
