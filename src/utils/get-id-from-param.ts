export const getIdFromParam = (param: string): number => {
  const paramArr = param.split('-');
  return parseInt(paramArr[paramArr.length - 1]);
};
