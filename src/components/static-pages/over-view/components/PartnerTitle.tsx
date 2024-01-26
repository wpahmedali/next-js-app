import { Fragment } from 'react';
const PartnerTitle = () => {
  return (
    <Fragment>
      <section className="max-w-full p-6 mx-auto dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text black capitalize dark:text black">japan Port</h1>
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
              <div className="abw bxq cbh ccj ccq flex items-center me-4">
                <div className="lx yz"><input id="credit-card" name="payment-type" type="radio" className=""/>
                  <label  className="pl-1 text-sm">CARS</label>
                </div>
                <div className="lx yz">
                  <input id="" name="payment-type" type="radio" className="ml-2"/>
                  <label className="pl-1 text-sm">BDR</label>
                </div>
                <div className="lx yz">
                  <input id="" name="payment-type" type="radio" className="ml-2"/>
                  <label className="pl-1 text-sm">RORO</label>
                </div>
                <div className="lx yz">
                  <input id="" name="payment-type" type="radio" className="ml-2"/>
                  <label className="pl-1 text-sm">TYRES</label>
                </div>
              </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm" >Forwarding Company</label>
                    <select id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Forwarding Company</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Shipping Company</label>
                    <select id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Shipping Company</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Currency</label>
                    <select id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Currency</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Remarks 1</label>
                    <input id="Remarks" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Remarks 2</label>
                    <input id="Remarks" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Validity Date From</label>
                    <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Validity Date To</label>
                    <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Japan Demurrage Days (JDMD)</label>
                    <input id="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Japan Detention Days (JDTD)</label>
                    <input id="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Demurrage Free Days (DMFD)</label>
                    <input id="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Japan Detention Days (DTFD)</label>
                    <input id="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Merged Free Days (MFD)</label>
                    <input id="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Transit Days (TD)</label>
                    <input id="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 text-sm">Outport (OP)</label>
                    <input id="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                  <label className="text-black dark:text-gray-200 text-sm">Other Documents</label>
                  <div className='flex'>
                    <div className="mt-1 flex justify-center pt-2">
                      <div className="space-y-1 text-center">
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-blue-500 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span className="text-white p-2">Upload files</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                          </label>
                          <p className="pl-1 text-black">No file chosen</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 flex justify-center ml-2">
                      <div className="space-y-1 text-center pt-2">
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-blue-500 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span className="text-white p-2">Upload files</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                          </label>
                          <p className="pl-1 text-black">No file chosen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                    <label className="text-black dark:text-gray-200 flex text-sm">Freight Charges <div className="flex items-center me-4 ml-2">
                    <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></div>      
                    </label>
                    <input id="Remarks" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 flex text-sm">THC <div className="flex items-center me-4 ml-2">
                    <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></div>      
                    </label>
                    <input id="Remarks" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 flex text-sm">Other Charge <div className="flex items-center me-4 ml-2">
                    <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></div>      
                    </label>
                    <input id="Remarks" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 flex text-sm">Freight Charges 4t <div className="flex items-center me-4 ml-2">
                    <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></div>      
                    </label>
                    <input id="Remarks" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 flex text-sm">Freight Charges 10t <div className="flex items-center me-4 ml-2">
                    <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></div>      
                    </label>
                    <input id="Remarks" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-black dark:text-gray-200 flex text-sm">Freight Charges TRUCKS <div className="flex items-center me-4 ml-2">
                    <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></div>      
                    </label>
                    <input id="Remarks" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                
                
            </div>
            
          </form>
      </section>
    </Fragment>
  );
};
export default PartnerTitle;
