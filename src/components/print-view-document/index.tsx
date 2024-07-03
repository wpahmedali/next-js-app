import React, { useState } from 'react';
import PrintViewHeader from './components/PrintViewHeader';
import PrintViewFooter from './components/PrintViewFooter';
import PrintViewButtons from './components/PrintViewButtons';
import PrintViewTableHeader from './components/PrintViewTableHeader';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { usePrintPreview } from 'react-query/hooks/api/fetch-print-preview';
import PageLoader from 'components/page-loader';
import { useQueryClient } from 'react-query';
import PrintViewTableRecord from './components/PrintViewTableRecord';

const PrintViewDocument = () => {
  const queryClient = useQueryClient();
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);
  const [checked, setChecked] = useState<number[]>([]);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const { data, isLoading, isPreviousData } = usePrintPreview(params);

  const handleSelectAll = (check: boolean) => {
    if (data && data.data && data.data.carList && check) {
      const allCarIds = data.data.carList.map((item) => item.carId);
      setChecked(allCarIds);
    } else {
      setChecked([]);
    }
  };

  const handleSelectItem = (check: boolean, id: number) => {
    setChecked((prev) => {
      const updatedChecked = Array.isArray(prev) ? [...prev] : [];

      if (updatedChecked?.includes(id) && check) {
        return updatedChecked?.filter((item) => item !== id);
      } else {
        updatedChecked?.push(id);
        return updatedChecked;
      }
    });
    setCheckAll(false);
  };

  const handleDeleteSelected = () => {
    if (checked?.length > 0) {
      const confirmation = window.confirm(
        'Are you sure you want to delete the selected items?'
      );
      if (confirmation) {
        if (data && data.data && data.data.carList) {
          const newData = data.data.carList.filter(
            (item) => !checked?.includes(item.carId)
          );

          queryClient.setQueryData(['PrintPreview', params], {
            data: {
              carList: newData,
              total: { totalCar: newData.length },
            },
          });
        }
      }
    }
  };

  const handleDeleteItem = (id: number) => {
    const confirmation = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (confirmation) {
      if (data && data.data && data.data.carList) {
        const newData = data.data.carList.filter((item) => item.carId !== id);

        queryClient.setQueryData(['PrintPreview', params], {
          data: {
            carList: newData,
            total: { totalCar: newData.length },
          },
        });
      }
    }
  };

  return (
    <div className="w-[1000px] border border-gray-100 m-auto p-3">
      <PrintViewHeader total={data?.data?.total} />
      <PrintViewButtons
        data={data?.data?.carList}
        handleSelectAll={handleSelectAll}
        checkAll={checkAll}
        setCheckAll={setCheckAll}
        handleDeleteSelected={handleDeleteSelected}
      />
      <div className="relative overflow-x-auto shadow-md">
        {isLoading || isPreviousData ? (
          <PageLoader isLoading={true} />
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <PrintViewTableHeader />
            <tbody>
              {data?.data?.carList?.length === 0 && (
                <tr>
                  <td colSpan={9} className="my-7 text-red-600 text-center">
                    Data Not Found
                  </td>
                </tr>
              )}
              {data?.data?.carList?.map((item, index) => (
                <PrintViewTableRecord
                  key={index}
                  index={index}
                  data={item}
                  checked={checked}
                  handleSelectItem={handleSelectItem}
                  handleDeleteItem={handleDeleteItem}
                />
              ))}

              <PrintViewFooter />
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PrintViewDocument;
