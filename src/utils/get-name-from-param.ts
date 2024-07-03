export const getNameFromParam = (param: string): string => {
  const paramArr = param.split('-');
  return String(paramArr[0]);
};
