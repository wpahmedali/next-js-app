import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const vehiclePerPageList: number = 20;

export const allModelsStr: string = 'all-models';

export const vehicleListViews = Object.freeze({
  grid: 'grid',
  tabular: 'tabular',
});

export const interfaceMode = Object.freeze({
  inventory: 'inventory',
  sale: 'sale',
});

export const reactQuery = Object.freeze({
  vehicleList: {
    grid: 'vehicleListGrid',
    tabular: 'vehicleListTabular',
  },
});

export const emptyCarListParams: ICarListParams = {
  countryId: null,
  isCountryFound: false,
  page: null,
  fixPage: 1,
  perPage: null,
  makerId: null,
  modelId: null,
  bodyTypeId: null,
  fromYear: null,
  toYear: null,
  steeringId: null,
  transmissionId: null,
  fuelId: null,
  stockNo: null,
  chassisNo: null,
  engine: null,
  year: null,
  carId: null,
  purchaseFromDate: null,
  purchaseToDate: null,
  pdDays: null,
  etaCrossed: null,
  dutyPaid: null,
  noInspection: null,
};

export const philippineCountry = Object.freeze({
  id: 20000,
  name: 'philippine',
});

export const uaeCountry = Object.freeze({
  id: 17,
  name: 'U.A.E',
});

export const metaKeywords =
  'Japanese used cars, used cars, Jan Japan, used cars for sale, japan cars, Japanese vehicles, Japanese used car exporter, Japanese used car auction, Japanese used car dealer, Japanese used Toyota, Japanese used Nissan, Japanese used Honda, Japanese used cars in Dubai, Japanese used cars in Pakistan, Japanese used cars in United Kingdom, Japanese used cars in South Africa, Japanese used cars in Zambia, Japanese used cars in Tanzania, Japanese used cars in Kenya, Japanese used cars in Botswana, Japanese used cars in Namibia, High Quality Japanese cars';

export const FBAppId = '213393000865122';
export const FBPageName = 'janjapanglobal';

export const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjUzYjA0NTAyZmRiYThiNjgxNDA1OGRiODZiM2JlYjc4NWY1ZTI5ZjMzYmQ2MTE5ZDNlYTNhNTc1YmRkMzcxZGM3YjY2NGFhNDdhNDllN2YiLCJpYXQiOjE2ODQzODkzNjkuMTM4MzA0LCJuYmYiOjE2ODQzODkzNjkuMTM4MzEzLCJleHAiOjE2ODYxMTczNjkuMDc0MjQ0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.QYJXQ99ZzWpDhM0tSJTHoVLsGtitnGUCXyrqljm6KC5DJnJEmT0sq6XOWNYwdZjopwz2rRKYK3IoVesNIPNfDDIk6O6aNCRwchofkVFzzPUGOiVtOHBgyQYRN_OIUQ-dBsGp6MGtPSp9t0ILgNdhpw1ykB22NLHWkHlpFJ-2BVrvx70HnJKOyI2OhYTeoNXbfDMzNUyUrZ_c91NRDyCIVZ0bufriw41NhEBkRiWY97i--wazVJF2Qdghx5Ybj5D5dWsdbeGbvy8fbpAX0tXgPCu2znm2yRn8eQc63UfGh_nLViTxtdfp2rjJCQhaiP8H4H0QQAplGJMKB0D97x2LU2R6AJudByWG1mIl4fUXn7s55lM5OI_1fhH2TbGB2bJHKMHi3zJHdANNTUQpBx5lWwvOISExbaF924c7gvjqMWmRlRIkVouaodBfzsjtPy23pReF4B12ZqQBcIDE8t6c92UJ6wOoLHAjUdPdvEP6ju2AZ-MUUidCLl1lBvZucAEUKeBDtySNWvImiM2GG3zr8s3PHrBdT2BUVjazJBN2sfzumNvQP9Fiz8usTVCRpGdBiX0yTOcG0dlhsBd-drN-aVdm9ZsY25KK06nNa92s_76aGU9HIXlpCt7kQnqQj6jw9rVHHeVaOAbOZ05GPo7xN2q5EwQTcxUrVQIubfzQLXg';

export const imageUrl =
  'https://s3.eu-central-1.amazonaws.com/jansnewfiles/common/car_images/';
