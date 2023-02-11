export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type RiderProduct = {
  id?: string;
  title: string;
  price: number;
  image: string;
};

export type HorseProduct = {
  id?: string;
  title: string;
  price: number;
  image: string;
};

export type EditValue = {
  firstName: string;
  lastName: string;
  email: string;
};

export type Cart = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};
