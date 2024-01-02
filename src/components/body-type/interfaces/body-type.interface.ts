export interface IBodyType {
  name: string;
  id: number;
  bodyTypeCount: number;
  image: string;
  isEven: boolean;
  hideDialog?: (type: string) => void;
}
