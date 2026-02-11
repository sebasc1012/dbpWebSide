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
