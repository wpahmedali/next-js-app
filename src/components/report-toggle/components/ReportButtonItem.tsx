import React, { useState } from 'react';
import Loading from 'components/loading';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { useSetContext } from 'src/providers/ModelContext';
import { createNewPageQuery } from 'utils/create-queries';
import { exportSummaryReport } from 'react-query/api/summary-report/export-summary-report';
import { exportMukechiSummaryReport } from 'react-query/api/summary-report/export-mukechi-summary-report';
import { exportDemandCarReport } from 'react-query/api/vehicle/export-demand-vehicle-report';
import { exportVehicleList } from 'react-query/api/vehicle/export-vehicle-list';
import { getClearDemand } from 'react-query/api/demand-cars/clear-Demand';
import { notify } from 'utils/toast';

function ReportButtonItem({
  name,
  hookName,
  iconName,
}: {
  name: string;
  hookName: string;
  iconName: any;
}) {
  const setContext = useSetContext();
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);
  const queryParams = createNewPageQuery(router.query);
  const query = router.asPath.split('?');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const callHookByName = async (switchData: string) => {
    setIsLoading(true);
    try {
      switch (switchData) {
        // Summary Report
        case 'SummaryReport':
          setContext('SummaryReport');
          break;
        // Download Excel
        case 'DownloadExcel':
          const summaryReport = await exportSummaryReport(params.countryId);
          if (summaryReport?.data?.download_link) {
            window?.open(summaryReport.data.download_link, '_blank');
            setContext('');
          } else {
            notify('danger', 'Data not found.');
            setContext('');
          }

          break;
        // Mukechi Summary Report
        case 'MukechiSummaryReport':
          setContext('MukechiSummaryReport');
          break;
        // Mukechi Download Excel
        case 'MukechiDownloadExcel':
          const result = await exportMukechiSummaryReport(params.countryId);
          if (result?.data?.download_link) {
            window?.open(result.data.download_link, '_blank');
            setContext('');
          } else {
            notify('danger', 'Data not found.');
            setContext('');
          }
          break;
        // Demand Cars
        case 'DemandCars':
          setContext('DemandCars');
          break;
        // Demand Cars Excel
        case 'DemandCarsExcel':
          const demandCarsExcel = await exportDemandCarReport(params);
          if (demandCarsExcel?.data?.download_link) {
            window?.open(demandCarsExcel.data.download_link, '_blank');
            setContext('');
          } else {
            notify('danger', 'Data not found.');
            setContext('');
          }
          break;
        // Clear Demand
        case 'ClearDemand':
          const data = await getClearDemand(String(params.countryId));
          if (data?.success) {
            notify('success', data?.message);
            setContext('');
          } else {
            notify('danger', 'Data not found.');
            setContext('');
          }
          break;
        // Poster
        case 'Poster':
          if (query.length > 1) {
            window?.open(`/poster${queryParams + query[1]}`, '_blank');
          } else {
            window?.open(`/poster${queryParams}`, '_blank');
          }
          setContext('');
          break;
        // PrintView
        case 'PrintView':
          if (query.length > 1) {
            window?.open(`/print-view${queryParams + query[1]}`, '_blank');
          } else {
            window?.open(`/print-view${queryParams}`, '_blank');
          }
          setContext('');
          break;
        // ExportTo
        case 'ExportTo':
          const exportTo = await exportVehicleList(params);
          if (exportTo?.data?.download_link) {
            window?.open(exportTo.data.download_link, '_blank');
            setContext('');
          } else {
            notify('danger', 'Data not found.');
            setContext('');
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error exporting report:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    callHookByName(hookName);
  };

  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className="py-2 px-2 shadow-md gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-gray-50 text-gray-600 hover:bg-black hover:text-white disabled:opacity-50 text-center"
    >
      <span className="flex gap-1">
        {isLoading ? <Loading height="h-5" width="w-5" /> : iconName}

        {name}
      </span>
    </button>
  );
}

export default ReportButtonItem;
