export enum Steps {
  PaymentMethod,
  CustomerBilling,
  ReviewConfirm,
}

export const stepSection = [
  {
    value: Steps.PaymentMethod,
    label: "Info",
    text: "Card or Wallet",
  },
  {
    value: Steps.CustomerBilling,
    label: "plan",
    text: "Contact & Address",
  },
  {
    value: Steps.ReviewConfirm,
    label: "Summary",
    text: "Finalize payment",
  },
];

enum ROLE {
  ADMIN,
  SELLER,
  COSTUMER,
}

interface Product {
  name:string;
  date:Date;
  lastnAME:string;
}

interface User {
  userName: string;
  role: ROLE;
};

type omitType = Omit<User, "userName">

type choose = Pick<Product, "date" | "name">

interface partialUser extends Partial<Product> {

} // coloca todos los atributos como no requeridos 

interface requiereUser extends Required<User> {

}

const numeros : ReadonlyArray<number> = [1,2,2]

numeros.push() // como es read only no se puede mutar el array