import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const vehiclePerPageList: number = 20;

export const allModelsStr: string = 'all-models';

export const vehicleListViews = Object.freeze({
  grid: 'grid',
  tabular: 'tabular',
});

export const reactQuery = Object.freeze({
  vehicleList: {
    grid: 'vehicleListGrid',
    tabular: 'vehicleListTabular',
  },
});

export const emptyCarListParams: ICarListParams = {
  countryId: null,
  page: null,
  perPage: null,
  makerId: null,
  modelId: null,
  bodyTypeId: null,
  fromYear: null,
  toYear: null,
  steeringId: null,
  transmissionId: null,
  fuelId: null,
  chassisNo: null,
  auctionId: null,
  carId: null,
};

export const philippineCountry = Object.freeze({
  id: 20000,
  name: 'philippine',
});

export const metaKeywords =
  'Japanese used cars, used cars, Jan Japan, used cars for sale, japan cars, Japanese vehicles, Japanese used car exporter, Japanese used car auction, Japanese used car dealer, Japanese used Toyota, Japanese used Nissan, Japanese used Honda, Japanese used cars in Dubai, Japanese used cars in Pakistan, Japanese used cars in United Kingdom, Japanese used cars in South Africa, Japanese used cars in Zambia, Japanese used cars in Tanzania, Japanese used cars in Kenya, Japanese used cars in Botswana, Japanese used cars in Namibia, High Quality Japanese cars';
