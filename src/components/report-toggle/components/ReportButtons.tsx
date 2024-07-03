import React from 'react';
import ReportButtonItem from './ReportButtonItem';
import {
  SummaryReport,
  DownloadExcel,
  MukechiReport,
  DemoCar,
  ClearDemand,
  Posters,
  PrintIcon,
  ExportTo,
} from 'icons';

function ReportsButtons() {
  return (
    <div className="max-w-full 2xl:block lg:block md:block sm:block">
      <div className="container-fluid mx-auto grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 pt-2 gap-4">
        <ReportButtonItem
          name="Summary Report"
          hookName="SummaryReport"
          iconName={<SummaryReport />}
        />
        <ReportButtonItem
          name="Download Excel"
          hookName="DownloadExcel"
          iconName={<DownloadExcel />}
        />
        <ReportButtonItem
          name="Mukechi Summary Report"
          hookName="MukechiSummaryReport"
          iconName={<MukechiReport />}
        />
        <ReportButtonItem
          name="Mukechi Download Excel"
          hookName="MukechiDownloadExcel"
          iconName={<DownloadExcel />}
        />
        <ReportButtonItem
          name="Demand Cars"
          hookName="DemandCars"
          iconName={<DemoCar />}
        />
        <ReportButtonItem
          name="Demand Cars Excel"
          hookName="DemandCarsExcel"
          iconName={<DownloadExcel />}
        />
        <ReportButtonItem
          name="Clear Demand"
          hookName="ClearDemand"
          iconName={<ClearDemand />}
        />
        <ReportButtonItem
          name="Poster"
          hookName="Poster"
          iconName={<Posters />}
        />
        <ReportButtonItem
          name="Print View"
          hookName="PrintView"
          iconName={<PrintIcon />}
        />
        <ReportButtonItem
          name="Export To"
          hookName="ExportTo"
          iconName={<ExportTo />}
        />
        {/* <ReportButtonItem name="Sort By" hookName="ExportSortByCarReport" /> */}
      </div>
    </div>
  );
}

export default ReportsButtons;
