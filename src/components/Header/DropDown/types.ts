export interface IItems {
  title: string;
  link: string;
}

export type Arr = {
  items: IItems[];
  isValid: boolean;
};
